"use strict";

angular.module("app").config(function ($provide) {
    $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
        return function (ex, cause) {
            $delegate(ex, cause);
        }
    }])
});