"use strict";

angular.module("psMenu").controller("psMenuCtrl", ["$rootScope", "$scope", function ($rootScope, $scope) {    
    var vm = this;

    vm.isVertical = true;

    vm.getActiveElement = function () {
        return vm.activeElement;
    }

    vm.setActiveElement = function (el) {        
        vm.activeElement = el;
    };

    $scope.$on('is-menu-display', function (evt, data) {
        vm.isDisplay = data.show;        
        console.log("data-menu-display: "+data.show);
    });

    vm.isVerticalF = function () {
        return vm.isVertical;
    };

    vm.setRoute = function (route) {
        $rootScope.$broadcast('ps-menu-select-event', { route: route });
    };

    vm.toggleMenuLayout = function () {
        vm.isVertical = !vm.isVertical;
        $rootScope.$broadcast('ps-menu-toggle-layout', { isVertical: vm.isVertical})
    };
}]);