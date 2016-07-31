"use strict";

angular.module("psFramework").directive("psFramework", function () {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            imgSrc: '@'
        },
        templateUrl: "ext-modules/psFramework/psFrameworkTemplate.html",
        controller: "psFrameworkCtrl",
        controllerAs: "vm"
    }
});