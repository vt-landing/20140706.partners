'use strict';
app

.controller('VirtualInvestmentCtrl', function(
    $scope,
    $state,
    $timeout,
    $ionicPopover,
    $ionicLoading,
    $ionicScrollDelegate,
    $ionicHistory,
    localStorageService) {

    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };

    $scope.closePopover = function() {
        if ($scope.popover && $scope.popover.isShown()) {
            $scope.popover.hide();
        }
    };

    // Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        if ($scope.popover) {
            $scope.popover.remove();
        }
    });
});