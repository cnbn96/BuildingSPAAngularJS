"use strict";

angular.module("psFramework").controller("psFrameworkCtrl", function ($rootScope,$scope,$window,$timeout) {    
    $scope.isMenuButtonVisible = true;
    $($window).on("resize.psFramework", function () {
        $scope.$apply(function () {
            checkWidth();
            broadSend();
            $scope.$apply;
        });
    });

    $scope.$on("$destroy", function () {
        $($window).off("resize.psFramework");
    });

    var checkWidth = function () {
        var width = Math.max($($window).width(), $window.innerWidth);        
        $scope.isMenuVisible = (width > 768);
        $scope.isMenuButtonVisible = !$scope.isMenuVisible;        
    };
    var broadSend = function () {
        $rootScope.$broadcast("is-menu-display", { show: $scope.isMenuVisible })       
    }

    $scope.menuButtonClicked = function () {
        $scope.isMenuVisible = !$scope.isMenuVisible;
        broadSend();
        $scope.$apply;
    };
    $scope.$on('ps-menu-select-event', function (event, data) {
        console.log(data.route);
        checkWidth();
        broadSend();
    });
    $timeout(function () {
        checkWidth();
        broadSend();
    }, 0);

});