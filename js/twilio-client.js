angular.module('agent', ['ngMaterial', 'ngRoute'])
  .controller('agentLoginController', ['$scope', '$http', '$interval', '$timeout', '$mdToast', function ($scope, $http, $interval, $timeout, $mdToast) {
    chrome.app.window.current().setAlwaysOnTop(true);
    $scope.errorMessage = '';
    $scope.log = '';
    $scope.loggedIn = false;
    $scope.inCall = false;
    $scope.inSms = false;
    $scope.issmsaccepted = false;
    $scope.msgAttribute = {};
    $scope.selectedTab = 0;
    $scope.call_wrap ="";
    $scope.selectedCustomer = null;


    $scope.incomingPhoneNumber = '';
    $scope.seconds = 00;
    $scope.minutes = 00;
    $scope.hours = 00;

    var wsConnection = {};
    var worker = {};
    var latestReservation = {};
    var auxIdleSid = '';
    
    var crmRecordId = '';

   var serviceURL="http://10.242.245.33:6020/CRMService.svc";

    var initiatepostAPI=function(url,data,successCB,errorCB){
        $http({
          url:url,
          method:"POST",
          data:data,
          contentType: "application/json",
          dataType: "json"
      }).then(successCB),errorCB};

    
    $scope.initiateTwilio = function () {
      $http({
        method: 'POST',
        url: 'https://twilio-client-thilojith.c9users.io/getToken',
        data: {
          workerName: $scope.workerName
        }
      }).then(function successCallback(response) {
        console.log("...", response.data);
        response = response.data;
        $("#log").text("Connecting to Twilio..");
        $scope.errorMessage = '';

        $scope.worker = response.worker;
        setUpCallToken(response.token);
        setUpWorkerToken($scope.worker.token)
       // getCustomerDetails('9611979645');
        $scope.loggedIn = true;
      }, function errorCallback(response) {
        console.log(response);
        $scope.errorMessage = response.data.errormessage;
      })
    }
    function setUpCallToken(token) {
      Twilio.Device.setup(token, {
        'debug': true
      });
    }
    function setUpWorkerToken(token) {
      worker = new Twilio.TaskRouter.Worker(token);
      console.log("....worker.", worker);
      initiateWorker(worker);
    }

    function initiateWorker(worker) {
      worker.on("ready", function (worker) {
        console.log("ready...........")
        console.log(worker.sid)             // 'WKxxx'
        console.log(worker.friendlyName)    // 'Worker 1'
        console.log(worker.activityName)    // 'Reserved'
        console.log(worker.available)  
       // changeWorkerStatus();     // false
      });
      worker.on("error", function (error) {
        console.log("Websocket had an error: " + error.response + " with message: " + error.message);
      });
      worker.on("reservation.created", function (reservation) {
        console.log(".....reservation.created......", reservation)
        latestReservation = reservation;
        var attributes = reservation.task.attributes;
        if(reservation.task.taskChannelUniqueName === "voice"){
          
          reservation.call(
              attributes.from,
              'http://twilio-client-thilojith.c9users.io/agent_answer?reservationid='+reservation.sid,
              'http://twilio-client-thilojith.c9users.io/agent_answer_status_callback',
              'false',
              'false',
              'client:'+reservation.workerSid,
              function(error, reservation) {
                    if(error) {
                        console.log(error.code);
                        console.log(error.message);
                        return;
                    }
                   // reservation.accept();
                }
            )
        }else{
          //consider its SMS task 
          $scope.inSms = true;
          $scope.msgAttribute = attributes;
          $scope.selectedTab = 1;
        }

      });


      worker.activities.fetch(function (error, activityList) {
        if (error) {
          console.log(error.code);
          console.log(error.message);
          return;
        }
        var data = activityList.data;
        for (i = 0; i < data.length; i++) {
          console.log(data[i].friendlyName);
          if(data[i].friendlyName === 'Idle'){
            auxIdleSid = data[i].sid;
          }

        }
      });
    }

    function changeWorkerStatus(activitySid){
      var props = {"ActivitySid": activitySid };
      worker.update(props, function(error, worker) {
        if(error) {
          console.log(error.code);
          console.log(error.message);
        } else {
          console.log(worker.activityName); // "Offline"
        }
      });
  }

    $scope.acceptSMS = function () {
      latestReservation.accept(
        function (error, reservation) {
          if (error) {
            console.log(error.code);
            console.log(error.message);
            return;
          }
          console.log("reservation accepted");
          //$scope.issmsaccepted = true;
          for (var property in reservation) {
            console.log(property + " : " + reservation[property]);
          }
        }
      );
      createSMSActivity($scope.msgAttribute);
      $scope.issmsaccepted = true;
    }

    $scope.rejectSMS = function(){
      latestReservation.reject(
          function(error, reservation) {
              if(error) {
                  console.log(error.code);
                  console.log(error.message);
                  return;
              }
              console.log("reservation rejected");
              for (var property in reservation) {
                  console.log(property+" : "+reservation[property]);
              }
          }
      );
    }

    $scope.hangUpCall = function(){
      $scope.stopTimer();
      Twilio.Device.disconnectAll();
      $scope.inCall = false;
      $scope.isCallAccepted = false;
      $scope.selectedCustomer = null;
      sendCallWrap();
    }

    $scope.completeTask= function(taskType){
      latestReservation.task.complete();
      changeWorkerStatus(auxIdleSid);
      if(taskType === "SMS"){
          $scope.inSms = false;
          $scope.issmsaccepted = false;
          $scope.msgAttribute = {};
      }
    }

    Twilio.Device.ready(function (device) {
      $("#log").text("Ready");
    });

    Twilio.Device.error(function (error) {
      $("#log").text("Error: " + error.message);

      console.log("eoor...twi",error);
    });

    Twilio.Device.connect(function (conn) {
      $("#log").text("Successfully established call");
      console.log(".........on connection.....")
    });
    
    Twilio.Device.disconnect(function (conn) {
      $scope.stopTimer();
      $scope.inCall = false;
      $scope.isCallAccepted = false;
      changeWorkerStatus(auxIdleSid);
      console.log(".........on dis connection.....")
    });


    var callConnection = '';

    Twilio.Device.incoming(function (connection) {
      console.log("incoming..............", connection);
      $scope.incomingPhoneNumber = connection.parameters.From;
      $scope.inCall = true;
      callConnection = connection;
      getCustomerDetails($scope.incomingPhoneNumber);
      $scope.$apply();
    });



    $scope.accept = function () {
      console.log("accept..............");
      $scope.isCallAccepted = true;
      $scope.startTimer();

      callConnection.accept();

    }

    $scope.rejectCall = function () {
      console.log("reject.....call.........");
       $scope.inCall = false;
       changeWorkerStatus(auxIdleSid);
      callConnection.reject();

    }
    $scope.respond = function () {
      $scope.issmsaccepted = true;
    }

  
    $scope.redirect = function (customer) {
      createPhoneCallActivity(customer);
      chrome.runtime.sendMessage(
        'clgmggeclboefllmpcehljeckoggfoda',
        { myCustomMessage: customer.AccountRecordURL },
        function (response) {
          console.log("response: " + JSON.stringify(response));
        });
        $scope.selectedCustomer =  customer;
    }
    
    function getCustomerDetails(mobileNo){

      var data={request:{MobileNumber:mobileNo}};

      var url=serviceURL+"/GetCustomerDetails";

      var successCB=function(response){
        console.log("response",response.data);
        $scope.customerDetails=response.data.GetCustomerDetailsResult.Customers;
        // if($scope.customerDetails.length === 1){     
        //   $scope.selectedCustomer = $scope.customerDetails[0];
        //   $scope.redirect($scope.selectedCustomer);
        // }
        console.log("customerDetails",$scope.customerDetails);
      };
      var errorCB=function(error){
        console.log(response);
        $scope.errorMessage = response.data.errormessage;
      };

      initiatepostAPI(url,data,successCB,errorCB);

    }

    function createPhoneCallActivity(customer){
      var url = serviceURL+ '/CreatePhoneCallActivity';

      var requestData ={
        request : {
            AccountNumber : customer.AccountNumber,
            PhoneNumber : "9611979645",//$scope.incomingPhoneNumber
            IsInbound : true,
            UserID : 'Alice@utilities360.onmicrosoft.com', 
            Subject : 'Phone Call from ' + "9611979645" //$scope.incomingPhoneNumber
        }
      }
      var successCB=function(response){
        console.log("response",response.data);  
        
        if(response.data && response.data.CreatePhoneCallActivityResult.SuccessFlag){
          crmRecordId = response.data.CreatePhoneCallActivityResult.RecordID;
        }else{
          console.log("There is an error when trying to create phone call Activity");
        }
      };
      var errorCB=function(error){
        console.log(response);
      };
      initiatepostAPI(url,requestData,successCB,errorCB);
    }

    function sendCallWrap(){
      var url = serviceURL+ '/CallWrap';

      var requestData = {
        request :{
          RecordID: crmRecordId,
          Description : $scope.call_wrap
        }
      }
      var successCB=function(response){
        console.log("response",response.data);  
        if(response.data && response.data.CallWrapResult.SuccessFlag){
          console.log("Successfully done call wrap ");
        }else{
          console.log("There is an error when trying to do call Wrap", response.data.CallWrapResult.Error);
        }
      };
      var errorCB=function(error){
        console.log(response);
      };
      initiatepostAPI(url,requestData,successCB,errorCB);
    }
    
    function createSMSActivity(smsAttributes){
      var url = serviceURL+ '/CreateSMSActivity';

      var requestData = {
        request :{
          AccountNumber: smsAttributes.accountNo, //'4323657919', //
          PhoneNumber : smsAttributes.from,   //'9611979645',  //
          UserID : 'Alice@utilities360.onmicrosoft.com', 
          IsInbound : true, 
          Subject: 'SMS from '+ '9611979645', 
          Description: smsAttributes.subject  //'I have issue when submit meet read'
        }
      }
      var successCB=function(response){
        console.log("response",response.data);  
        if(response.data && response.data.CreateSMSActivityResult.SuccessFlag){
          console.log("Successfully done call wrap ");
        }else{
          console.log("There is an error when trying to do call Wrap", response.data.CallWrapResult.Error);
        }
      };
      var errorCB=function(error){
        console.log(response);
      };
      initiatepostAPI(url,requestData,successCB,errorCB);
    }




    $scope.startTimer = function () {
      timerID = $interval(function () {
        timer();
      }, 1000);
    };

    function timer() {
      ++$scope.seconds;

      if ($scope.seconds == 60) {
        $scope.seconds = 0;
        ++$scope.minutes;
        if ($scope.minutes == 60) {
          $scope.minutes = 0;
          ++$scope.hours;
        }
      }
    //   $scope.seconds = $scope.seconds < 9 && $scope.seconds.length == 1 ? "0" + $scope.seconds : $scope.seconds;
    //  $scope.minutes = $scope.minutes < 9 && !$scope.minutes.startsWith("0") ? "0" + $scope.minutes : $scope.minutes;
    //  $scope.hours = $scope.hours < 9 && !$scope.hours.startsWith("0") ? "0" + $scope.hours : $scope.hours;
    }

    $scope.stopTimer = function () {
      $interval.cancel(timerID);
      $timeout(cleartimer, 2000);
    };

    var cleartimer = function () {
      $scope.seconds = 0;
      $scope.minutes = 0;
      $scope.hours = 0;
      $scope.isCallAccepted = false;
    }


    // $scope.WebSocketTest = function () {
    //   window.WebSocket = window.WebSocket || window.MozWebSocket;

    //   var connection = wsConnection = new WebSocket('ws://twilio-client-thilojith.c9users.io');

    //   connection.onopen = function (con) {
    //     console.log("connecting...................", con);
    //     connection.send(JSON.stringify({ ky: "heloo", ju: "dfdsf" }));
    //     // connection is opened and ready to use
    //   };

    //   connection.onerror = function (error) {
    //     console.log("error...................", error);
    //     // an error occurred when sending/receiving data
    //   };

    //   connection.onmessage = function (message) {
    //     // try to decode json (I assume that each message from server is json)
    //     try {
    //       var json = JSON.parse(message.data);
    //       console.log("json.................", json)
    //       handleWSMessage(json);
    //     } catch (e) {
    //       console.log('This doesn\'t look like a valid JSON: ', message.data);
    //       return;
    //     }
    //     // handle incoming message
    //   };

    // }
    // function sendMessage(msg) {
    //   wsConnection.send(JSON.stringify(msg));
    // }
    // function handleWSMessage(msg) {
    //   if (msg.callBackType === "SMS" && msg.assginedWorker === $scope.worker.sid) {
    //     $scope.inSms = true;
    //     $scope.msgAttribute = msg;
    //     $scope.selectedTab = 2;
    //   }
    // }
    // $scope.WebSocketTest();


  }]);

