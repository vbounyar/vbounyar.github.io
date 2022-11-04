'use strict';

/**
 * @ngdoc overview
 * @name contactListApp
 * @description
 * # todoListApp
 *
 * Main module of the application.
 */
angular
  .module('todoListApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.module('todoListApp').directive('bsNavbar', ['$location', function ($location) {
  return {
    restrict: 'A',
    link: function postLink(scope, element) {
      scope.$watch(function () {
        return $location.path();
      }, function (path) {
        angular.forEach(element.children(), (function (li) {
          var $li = angular.element(li),
            regex = new RegExp('^' + $li.attr('data-match-route') + '$', 'i'),
            isActive = regex.test(path);
          $li.toggleClass('active', isActive);
        }));
      });
    }
  };
}]);
