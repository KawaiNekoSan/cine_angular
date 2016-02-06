'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
