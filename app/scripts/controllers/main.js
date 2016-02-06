'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
