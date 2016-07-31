"use strict";

angular.module("psMenu").directive("psMenu", function () {
    return {
        transclude: true,
        templateUrl: "ext-modules/psMenu/psMenuTemplate.html",
        link: function (scope, ele, attrs) {

        },
        controller: "psMenuCtrl",
        controllerAs: "vm"
    }
});