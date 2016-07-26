// const angular = require('angular');
const app = angular.module('packafig', ['ngRoute']);
let info = {};
const loaderList = {
  json: {
    loader: 'json-loader',
    npm: 'npm install --save json-loader',
    regEx: '/\.json$/',
  },
  css: {
    loader: 'css-loader',
    npm: 'npm install css-loader --save-dev',
    regEx: '/\.css$/',
  },
  sass: {
    loader: 'sass-loader',
    npm: 'npm install sass-loader',
    regEx: '/\.scss$/',
  },
  babel: {
    loader: 'babel-loader',
    npm: 'npm install babel-loader babel-core babel-preset-es2015 --save-dev',
    regEx: '/\.js$/',
  },
  eslint: {
    loader: 'eslint-loader',
    npm: 'npm install eslint-loader',
    regEx: '/\.js$/',
  },
  elm: {
    loader: 'elm-webpack-loader',
    npm: 'npm install --save elm-webpack-loader',
    regEx: '/\.elm$/',
  },
};

const loaderNames = Object.keys(loaderList);


app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './partials/production.html',
    controller: 'questionsController',
  });
});

app.controller('questionsController', function($scope, $http) {
  $scope.options = {
    entry: '',
    fileName: '',
    fileOutput: '',
    loader: '',
  };
  $scope.makeFile = function() {
    console.log('firing');
    info = {
      entry: $scope.options.entry,
      output: {
        path: $scope.options.fileOutput,
        filename: $scope.options.fileName,
      },
    };
    $http.post('/', JSON.stringify(info));
  };
  $scope.loaders = loaderNames;
  $scope.questions = [
    'What is your entry file?',
    'Define the output file path:',
    'What do you want to name the output file?',
  ];
});
