'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.countries',
    'myApp.sidebar',
    'myApp.network-viz',
    'myApp.what-is',
    'myApp.aprende',
    'myApp.publica',
    'myApp.objdesasoste',
    'myApp.brechasgenero',
    'myApp.internetdemografia',
    'myApp.movilidadciudades',
    'myApp.derechosexualidad',


    //'myApp.ecoView',
    // 'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/home'});
}]);
