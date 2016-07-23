const angular = require('angular');

const app = angular.module('packafig', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './partials/production.html',
    controller: 'questionsController',
  });
});

app.controller('questionsController', function($scope) {
  $scope.message = 'hello';
  $scope.questions = [
    'Will you have more than one entry point?',
    //if no
    'Enter the entry point',
  ];
});
