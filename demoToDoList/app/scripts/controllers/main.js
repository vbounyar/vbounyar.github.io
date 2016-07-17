'use strict';

/**
 * @ngdoc function
 * @name todoListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactListApp
 */
angular.module('todoListApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tasks = [];

    $scope.addTask = function () {
      $scope.tasks.push({
          'task':$scope.task
        });
    };

    $scope.deleteTask = function(index) {
      if($scope.tasks.length > 0){
        $scope.tasks.splice(index, 1);
      }

    };


  });
