"use strict";

angular.module("psMenu").directive("psMenuItem", function () {
    return {
        transclude: true,
        scope: {
            label: '@',
            route: '@',
            icon: '@'
        },
        require: "^psMenu",
        templateUrl: "ext-modules/psMenu/psMenuItemTemplate.html",
        link: function (scope, ele, attrs, ctrl) {
            
            scope.isActive = function () {
                return ele === ctrl.getActiveElement();
            };

            ele.on('click', function (event) {
                event.stopPropagation();
                event.preventDefault();
                scope.$apply(function () {
                    ctrl.setActiveElement(ele);
                    ctrl.setRoute(scope.route);
                });
            });
        },
        controller: "psMenuItemCtrl",
        controllerAs: "vm"
    }
});