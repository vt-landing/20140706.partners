'use strict';
app

.controller('ViPortfolioCtrl', function(
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
});