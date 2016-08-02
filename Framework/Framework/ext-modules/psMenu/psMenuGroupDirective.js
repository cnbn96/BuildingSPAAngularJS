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
                return ctrl.isVerticalF() || ele.parents('.ps-menu-group-item').length > 0;
            }
            scope.clicked = function () {
                scope.isOpen = !scope.isOpen;

                if (ele.parents('.ps-menu-group-item').length == 0) {
                    scope.setSubmenuPos();
                }

                ctrl.setOpenMenuScope(scope);
            }

            scope.setSubmenuPos = function () {
                var pos = ele.offset();
                $('.ps-menu-group-item').css({ 'left': pos.left , 'top': 46 });
            }
        }        
    }
});