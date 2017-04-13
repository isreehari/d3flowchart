(function(angular) {
    'use strict';

function flowchartController($scope){
    alert("Hi");
}


angular
        .module("flowchartApp")
        .controller("flowchartController",['$scope',flowchartController]);

})(window.angular);