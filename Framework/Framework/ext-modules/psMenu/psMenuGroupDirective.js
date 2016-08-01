"use strict";

angular.module("psMenu").directive("psMenuGroup", function () {
    return {
        transclude: true,
        scope: {
            label: '@',            
            icon: '@'
        },
        require: "^psMenu",
        templateUrl: "ext-modules/psMenu/psMenuGroupTemplate.html",
        link: function (scope, ele, attrs, ctrl) {
            scope.isOpen = false;
            scope.closed = function () {
                scope.isOpen = false;
            };
            scope.isVertical = function () {
                return ctrl.isVerticalF();
            }
            scope.clicked = function () {
                scope.isOpen = !scope.isOpen;
            }
        }        
    }
});