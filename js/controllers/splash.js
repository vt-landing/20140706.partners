'use strict';
app

.controller('SplashCtrl', function(
    $scope,
    $state,
    $timeout,
    $ionicHistory,
    localStorageService) {

    $scope.$on('$ionicView.beforeEnter', function() {
        // Clear history since this might have been a forced redirect
        $ionicHistory.clearHistory();
    });

    $scope.onMyWealth = function() {
        $state.go('app.myWealth');
    };
    $scope.onMyRewards = function() {
        $state.go('app.myRewards');
    };
    $scope.onVirtualInvestment = function() {
        $state.go('app.virtualInvestment');
    };
    $scope.onUncover = function() {
        $state.go("app.uncoverJessica")
    }
});