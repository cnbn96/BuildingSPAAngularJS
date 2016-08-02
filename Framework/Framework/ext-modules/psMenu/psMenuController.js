"use strict";

angular.module("psMenu").controller("psMenuCtrl", ["$rootScope", "$scope", "$window","$timeout", function ($rootScope, $scope, $window,$timeout) {
    var vm = this;
    var width = $($window).width();
    console.log(width);
    vm.isVertical = true;        

    vm.getActiveElement = function () {
        return vm.activeElement;
    }

    vm.setActiveElement = function (el) {        
        vm.activeElement = el;
    };

    $scope.$on('is-menu-display', function (evt, data) {
        vm.isDisplay = data.show;        
        if (vm.isDisplay == false) {
            vm.isVertical = true;
        }
    });

    vm.isVerticalF = function () {
        return vm.isVertical;
    };

    vm.setOpenMenuScope = function (scope) {
        vm.openMenuScope = scope;
    }

    vm.setRoute = function (route) {
        $rootScope.$broadcast('ps-menu-select-event', { route: route });
    };

    vm.toggleMenuLayout = function () {
        if ( width > 768) {            
            if (vm.openMenuScope) {
                vm.openMenuScope.closed();
            }

            vm.isVertical = !vm.isVertical;
            $rootScope.$broadcast('ps-menu-toggle-layout', { isVertical: vm.isVertical })
        } else {
            alert("Creen width must be larger than 768");
        }
        
    };

    angular.element(document).bind('click', function (e) {
        if (vm.openMenuScope && !vm.isVertical) {            
            if ($(e.target).hasClass('ps-select-item') || $(e.target).parent().hasClass('ps-select-item')) {
                return;
            }
            console.log("closed");
            $scope.$apply(function () {
                vm.openMenuScope.closed();
            });
            e.preventDefault();
            e.stopPropagation();
        }
    })
}]);