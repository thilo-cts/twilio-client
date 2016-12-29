angular.module('agent', ['ngMaterial', 'ngRoute'])
    .controller('agentLoginController', ['$scope', '$http', '$interval', '$timeout', '$mdToast', function($scope, $http, $interval, $timeout, $mdToast) {
       // chrome.app.window.current().setAlwaysOnTop(true);
        $scope.errorMessage = '';
        $scope.log = '';
        $scope.loggedIn = false;
        $scope.inCall = false;
        $scope.inSms = false;
        $scope.inChat = false;
        $scope.issmsaccepted = false;
        $scope.isChataccepted = false;
        $scope.msgAttribute = {};
        $scope.selectedTab = 0;
        $scope.call_wrap = "";
        $scope.selectedCustomer = null;
        $scope.customerDetails = null;
        $scope.channelMessages = [];
        $scope.agentMessage1 ="hello";


        $scope.incomingPhoneNumber = '';
        $scope.seconds = "0"+"0";
        $scope.minutes = "0"+"0";
        $scope.hours = "0"+"0";

        $scope.activity = '';

        var wsConnection = {};
        var worker = {};
        var latestReservation = {};
        var auxIdleSid = '';
        var endpointId = "17262430f288cd70522c1db3da827388";
        var crmRecordId = '';
        var chatClient = {};
        var workerChannel = {};
        var channelMessages = [];


        var serviceURL = "https://cxm.cognizant.com/CRMService.svc";
        var crmLocalUrl = "http://localhost:5000/?";

        var initiateGetAPI = function(url) {
            $http({
                url: url,
                method: "GET",
            }).then(function successCB(response){
                console.log("succuessfully called GET API", response);
            }), function(error){
                console.log("Error in GET API call ", error)
            }
        };


        var initiatepostAPI = function(url, data, successCB, errorCB) {
            $http({
                url: url,
                method: "POST",
                data: data,
                contentType: "application/json",
                dataType: "json"
            }).then(successCB), errorCB
        };


        $scope.initiateTwilio = function() {
            $http({
                method: 'POST',
                url: 'https://twilio-client-thilojith.c9users.io/getToken',
                data: {
                    workerName: $scope.workerName,
                    endpointId: endpointId
                }
            }).then(function successCallback(response) {
                console.log("...", response.data);
                response = response.data;
                $("#log").text("Connecting to Twilio..");
                $scope.errorMessage = '';

                $scope.worker = response.worker;
                setUpCallToken(response.token);
                setUpWorkerToken($scope.worker.token);
                setUpChatChannel(response.clientChannelToken);
                // getCustomerDetails('733689700');
                //getCustomerDetails('+19733689700');
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

        function setUpChatChannel(token) {
            chatClient = new Twilio.Chat.Client(token,{logLevel: 'error'});
            initiateChatClient();
        }


        function initiateWorker(worker) {
            worker.on("ready", function(worker) {
                console.log("ready...........")
                console.log(worker.sid) // 'WKxxx'
                console.log(worker.friendlyName) // 'Worker 1'
                console.log(worker.activityName) // 'Reserved'
                console.log(worker.available)
                
                $scope.activity = worker.activityName;
                $scope.$apply();
                    // changeWorkerStatus();     // false
            });
            worker.on("error", function(error) {
                console.log("Websocket had an error: " + error.response + " with message: " + error.message);
            });

            worker.on("reservation.created", function(reservation) {
                console.log(".....reservation.created......", reservation)
                latestReservation = reservation;
                var attributes = reservation.task.attributes;
                if (reservation.task.taskChannelUniqueName === "voice") {

                    reservation.call(
                        attributes.from,
                        'http://twilio-client-thilojith.c9users.io/agent_answer?reservationid=' + reservation.sid,
                        'http://twilio-client-thilojith.c9users.io/agent_answer_status_callback',
                        'false',
                        'false',
                        'client:' + reservation.workerSid,
                        function(error, reservation) {
                            if (error) {
                                console.log(error.code);
                                console.log(error.message);
                                return;
                            }
                            // reservation.accept();
                        }
                    )
                } else {
                    //consider its SMS task 
                    if (attributes.callBackType === "SMS") {
                        $scope.inSms = true;
                        $scope.msgAttribute = attributes;
                        console.log("...attributes...", attributes);

                        var url = crmLocalUrl+"CaseId={"+ attributes.caseId +"}";
                        initiateGetAPI(url)

                        $scope.selectedTab = 1;
                        $scope.$apply();
                    }else if (attributes.callBackType === "CHAT"){
                        addMember(attributes.customerIdentity);
                        $scope.chatCustomer = attributes.customerIdentity;
                        $scope.selectedTab = 2;
                        $scope.inChat = true;
                        $scope.$apply();
                    }
                }

            });
            
            worker.on("activity.update", function(worker) {

                console.log("am on activity update .........",worker.activityName);
                $scope.activity = worker.activityName;
                $scope.$apply();
            }); 

            worker.activities.fetch(function(error, activityList) {
                if (error) {
                    console.log(error.code);
                    console.log(error.message);
                    return;
                }
                var data = activityList.data;
                for (i = 0; i < data.length; i++) {
                    console.log(data[i].friendlyName);
                    if (data[i].friendlyName === 'Idle') {
                        auxIdleSid = data[i].sid;
                        if($scope.activity !== "Reserved"){
                            changeWorkerStatus(auxIdleSid);
                        }
                    }

                }
            });
        }


        function changeWorkerStatus(activitySid) {
            var props = { "ActivitySid": activitySid };
            worker.update(props, function(error, worker) {
                if (error) {
                    console.log(error.code);
                    console.log(error.message);
                } else {
                    console.log(worker.activityName); // "Offline"
                }
            });
        }

        $scope.acceptSMS = function() {
            latestReservation.accept(
                function(error, reservation) {
                    if (error) {
                        console.log(error.code);
                        console.log(error.message);
                        return;
                    }
                    console.log("reservation accepted");
                    for (var property in reservation) {
                        console.log(property + " : " + reservation[property]);
                    }
                    console.log(".......msg attribute....", $scope.msgAttribute);
                    updateCase($scope.msgAttribute.caseId);

                }

            );
            $scope.issmsaccepted = true;
        }

        $scope.rejectSMS = function() {
            latestReservation.reject(
                function(error, reservation) {
                    if (error) {
                        console.log(error.code);
                        console.log(error.message);
                        return;
                    }
                    console.log("reservation rejected");
                    for (var property in reservation) {
                        console.log(property + " : " + reservation[property]);
                    }
                }
            );
        }


        $scope.acceptChat = function() {
            latestReservation.accept(
                function(error, reservation) {
                    if (error) {
                        console.log(error.code);
                        console.log(error.message);
                        return;
                    }
                    console.log("reservation accepted");
                    for (var property in reservation) {
                        console.log(property + " : " + reservation[property]);
                    }
                    console.log(".......msg attribute....", $scope.msgAttribute);

                }

            );
            //createSMSActivity($scope.msgAttribute);
            $scope.isChataccepted = true;
        }

        $scope.rejectChat = function() {
            latestReservation.reject(
                function(error, reservation) {
                    if (error) {
                        console.log(error.code);
                        console.log(error.message);
                        return;
                    }
                    console.log("reservation rejected");
                    for (var property in reservation) {
                        console.log(property + " : " + reservation[property]);
                    }
                }
            );
            $scope.inChat = false;
        }


        $scope.hangUpCall = function() {
            $scope.stopTimer();
            Twilio.Device.disconnectAll();
            $scope.inCall = false;
            $scope.isCallAccepted = false;
            $scope.selectedCustomer = null;
            $scope.customerDetails = null;
            sendCallWrap();
        }

        $scope.completeTask = function(taskType) {
            latestReservation.task.complete();
            changeWorkerStatus(auxIdleSid);
            if (taskType === "SMS") {
                $scope.inSms = false;
                $scope.issmsaccepted = false;
                $scope.msgAttribute = {};
                closeCRMSession();
            }else if(taskType === "Chat"){
                $scope.inChat = false;
                $scope.isChataccepted = false;
                $scope.msgAttribute = {};
                $scope.channelMessages = [];
              // removeCustomerFromChannel();
            }

        }
        function removeCustomerFromChannel(){
            workerChannel.getMembers().then(function(members){
                console.log("members.............",members);
                angular.forEach(members, function(key, member){
                    if(member.identity  !== $scope.worker.friendlyName){
                        member.remove();
                    }
                })
            });
        }

        Twilio.Device.ready(function(device) {
            $("#log").text("Ready");
        });

        Twilio.Device.error(function(error) {
            $("#log").text("Error: " + error.message);

            console.log("eoor...twi", error);
        });

        Twilio.Device.connect(function(conn) {
            $("#log").text("Successfully established call");
            console.log(".........on connection.....")
        });

        Twilio.Device.disconnect(function(conn) {
            $scope.stopTimer();
            $scope.inCall = false;
            $scope.isCallAccepted = false;
            changeWorkerStatus(auxIdleSid);
            console.log(".........on dis connection.....")
        });


        var callConnection = '';

        Twilio.Device.incoming(function(connection) {
            console.log("incoming..............", connection);
            $scope.incomingPhoneNumber = connection.parameters.From;
            $scope.inCall = true;
            callConnection = connection;
            getCustomerDetails($scope.incomingPhoneNumber);
            $scope.$apply();
        });



        $scope.accept = function() {
            console.log("accept..............");
            $scope.isCallAccepted = true;
            $scope.startTimer();

            callConnection.accept();

        }

        $scope.rejectCall = function() {
            console.log("reject.....call.........");
            $scope.inCall = false;
            changeWorkerStatus(auxIdleSid);
            callConnection.reject();

        }
        $scope.respond = function() {
            $scope.issmsaccepted = true;
        }

        $scope.onSelectCustomer = function(customer) {
            createPhoneCallActivity(customer);
            
            var url = crmLocalUrl + "AccountNumber=" +customer.AccountNumber;
            initiateGetAPI(url);

            setTimeout(function() {
                $scope.selectedCustomer = customer;
            }, 1000)

        }


        function initiateChatClient() {
           
            chatClient.createChannel({
                friendlyName: $scope.worker.friendlyName + "_" + $scope.worker.sid,
                isPrivate: true,
            }).then(function(channel) {
               
                console.log("Agent has created a channel..", channel._friendlyName);
                channel.join().then(function() {
                    console.log("Agent has joined into his owm channel")
                    channel.on('messageAdded', addMessage);
                    channel.on('messageUpdated', addMessage);
                    channel.on('memberJoined', onMembersJoined);
                     workerChannel = channel;

                });
            });
        }
        function getAllChannels(){
            chatClient.getUserChannels().then(function(channels){
                console.log("All............channels..", channels);
                angular.forEach(channels.items, function(key, value){
                    console.log("keyyyy..............", key.friendlyName,"..........value..");
                   // key.leave();
                    //key.delete();
                });
            });
        }

        function addMessage(message) {
            console.log("message", message);
            var msg = {
                author: message.author,
                message: message.body
            }

            $scope.channelMessages.push(msg);
           $scope.$apply();
        }

        function addMember(memberId) {
            workerChannel.invite(memberId).then(function() {
                console.log("....Member added ....", memberId);
            });
        }

        function onMembersJoined(member) {
            console.log("member  joined.....", member);
        }

        $scope.sendMessage = function() {
            var msg = $('#agentMessage').val();
            workerChannel.sendMessage(msg).then(function() {
                // msg.author = 'me';
                // $scope.channelMessages.push(msg);
                console.log("after sent message from agent.........");
                $('#agentMessage').val('');
            });
            
        }


        $scope.redirect = function(url) {
            console.log("redirect....", url);
            // chrome.runtime.sendMessage(
            //     'mhmkebjaoeliiemcjapjlipcmoddgcii', { myCustomMessage: url },
            //     function(response) {
            //         console.log("response of redirect *****: " + JSON.stringify(response));
            //     });
        }

        function getCustomerDetails(mobileNo) {

            var data = { request: { MobileNumber: mobileNo } };

            var url = serviceURL + "/GetCustomerDetails";

            var successCB = function(response) {
                console.log("response", response.data);
                var customerResult = response.data.GetCustomerDetailsResult;
                if (customerResult.SuccessFlag) {
                    $scope.customerDetails = customerResult.Customers;
                    if ($scope.customerDetails.length === 1) {
                        $scope.selectedCustomer = $scope.customerDetails[0];

                        var url = crmLocalUrl + "AccountNumber=" +$scope.selectedCustomer.AccountNumber;
                        initiateGetAPI(url);
                        createPhoneCallActivity($scope.selectedCustomer);
                    }
                } else {
                    console.log(",,gonn call redirect,,");
                    var url = crmLocalUrl + "AccountNumber=0";    
                    initiateGetAPI(url);
                }
                //console.log("customerDetails", $scope.customerDetails);
            };
            var errorCB = function(error) {
                console.log(response);
                $scope.errorMessage = response.data.errormessage;
            };

            initiatepostAPI(url, data, successCB, errorCB);

        }


        function updateCase(caseId) {
            var data = { request: { CaseId: caseId, OwnerId: $scope.worker.sid } };
            var url = serviceURL + "/UpdateCase";

            var successCB = function(response) {
                console.log("response ofupdate case", response.data);

            };
            var errorCB = function(error) {
                console.log("....error in update case...", error);
            }
            initiatepostAPI(url, data, successCB, errorCB);
        }


        function createPhoneCallActivity(customer) {
            var url = serviceURL + '/CreatePhoneCallActivity';

            var requestData = {
                request: {
                    AccountNumber: customer.AccountNumber,
                    PhoneNumber: $scope.incomingPhoneNumber,
                    IsInbound: true,
                    UserID: 'Alice@utilities360.onmicrosoft.com',
                    Subject: 'Phone Call from ' + $scope.incomingPhoneNumber
                }
            }
            var successCB = function(response) {
                console.log("response", response.data);

                if (response.data && response.data.CreatePhoneCallActivityResult.SuccessFlag) {
                    crmRecordId = response.data.CreatePhoneCallActivityResult.RecordID;
                } else {
                    console.log("There is an error when trying to create phone call Activity");
                }
            };
            var errorCB = function(error) {
                console.log(response);
            };
            initiatepostAPI(url, requestData, successCB, errorCB);
        }

        function sendCallWrap() {
            var url = serviceURL + '/CallWrap';

            var requestData = {
                request: {
                    RecordID: crmRecordId,
                    Description: $scope.call_wrap
                }
            }
            var successCB = function(response) {
                console.log("response", response.data);
                if (response.data && response.data.CallWrapResult.SuccessFlag) {
                    console.log("Successfully done call wrap ");
                } else {
                    console.log("There is an error when trying to do call Wrap", response.data.CallWrapResult.Error);
                }
            };
            var errorCB = function(error) {
                console.log(response);
            };
            
            closeCRMSession();
            initiatepostAPI(url, requestData, successCB, errorCB);
        }

        function closeCRMSession(){
            var url = crmLocalUrl+"AccountNumber=-1";
            initiateGetAPI(url);
        }

        function createSMSActivity(smsAttributes) {
            var url = serviceURL + '/CreateSMSActivity';

            var requestData = {
                request: {
                    AccountNumber: smsAttributes.accountNo, //'4323657919', //
                    PhoneNumber: smsAttributes.from, //'9611979645',  //
                    UserID: 'Alice@utilities360.onmicrosoft.com',
                    IsInbound: true,
                    Subject: 'SMS from ' + '9611979645',
                    Description: smsAttributes.subject //'I have issue when submit meet read'
                }
            }
            var successCB = function(response) {
                console.log("response", response.data);
                if (response.data && response.data.CreateSMSActivityResult.SuccessFlag) {
                    console.log("Successfully done call wrap ");
                } else {
                    console.log("There is an error when trying to do call Wrap", response.data.CallWrapResult.Error);
                }
            };
            var errorCB = function(error) {
                console.log(response);
            };
            initiatepostAPI(url, requestData, successCB, errorCB);
        }




        $scope.startTimer = function() {
            timerID = $interval(function() {
                timer();
            }, 1000);
        };

      function timer() {
      ++$scope.seconds;
      $scope.seconds = $scope.seconds <=9 ? "0"+$scope.seconds : $scope.seconds;
      if ($scope.seconds == 60) {
        $scope.seconds = "0"+"0";
        ++$scope.minutes;
        $scope.minutes = $scope.minutes <= 9 ? "0"+$scope.minutes : $scope.minutes;
        if ($scope.minutes == 60) {
          $scope.minutes ="0"+"0";
          ++$scope.hours;
          $scope.hours = $scope.hours <= 9 ? "0"+$scope.hours : $scope.hours;
        }
      }
    }
        $scope.stopTimer = function() {
            $interval.cancel(timerID);
            $timeout(cleartimer, 2000);
        };

        var cleartimer = function() {
            $scope.seconds = 00;
            $scope.minutes = 00;
            $scope.hours = 00;
            $scope.isCallAccepted = false;
        }


       

    }]);