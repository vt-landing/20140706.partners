'use strict';
app

.controller('FamilyTimeCtrl', function(
    $scope,
    $state,
    $timeout,
    $ionicSideMenuDelegate,
    $ionicHistory,
    $interval,
    localStorageService) {

    $scope.$on('$ionicView.beforeEnter', function() {
        // Clear history since this might have been a forced redirect
        $ionicHistory.clearHistory();
    });
    $scope.toggleNotification = function(){
        $scope.notificationClass = "fadeIn animated";
        // $scope.notificationClass = "";
    }
    $scope.hideNotification = function(){
        $scope.notificationClass = "";
    }
    var progressInterval;
    $scope.pbStyleVar = {};
    $scope.clockStyleVar = {color:"black"};
    $scope.progressNum = 20;
    $scope.pbStyleVar.width = $scope.progressNum + "%";

    $scope.incrementProgressBar = function(){
        console.log("incrementing");
        $scope.clockStyleVar.color = "#017AFD";// "rgba(11,68,121,0.8)";
        progressInterval = $interval(function(){
            $scope.progressNum += 1;
            $scope.pbStyleVar.width = $scope.progressNum + "%";
        },1000);
    }
    $scope.stopProgressBar = function(){
        $interval.cancel(progressInterval);
        $scope.clockStyleVar.color = "black";

    }
    $scope.toggleProgressBar = (function(){
        var tgState = false;
        return function(){
            tgState = !tgState;
            if(tgState){
                $scope.incrementProgressBar();
            }
            else{
                $scope.stopProgressBar();
            }
        }
    }());
});