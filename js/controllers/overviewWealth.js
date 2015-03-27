'use strict';
app

.controller('OverviewWealthCtrl', function(
    $scope,
    $state,
    $timeout,
    $ionicSideMenuDelegate,
    $ionicHistory,
    localStorageService) {

    $scope.$on('$ionicView.beforeEnter', function() {
        // Clear history since this might have been a forced redirect
        $ionicHistory.clearHistory();
    });
    $scope.toggleMoneyTransfer = function(){
        console.log("transferring money")
        $scope.moneyTransferClass = "fadeIn animated";
        $scope.moneyAmountClass = "bounce animated";
        $scope.moneyTransferred = 200;
        // $scope.notificationClass = "";
        $timeout(function(){
            // $scope.moneyTransferClass = "";
            $scope.moneyTransferClass = "fadeOutUp animated";
        }, 1000);
        $timeout(function(){
            // $scope.moneyTransferClass = "";
            $scope.moneyTransferClass = "";
        }, 3000);

    }
    $scope.hideMoneyTransfer = function(){
        $scope.moneyTransferClass = "";
    }
});