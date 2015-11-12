// Ionic Starter App
// Firebase 
var fb = new Firebase("https://ntasimgapp.firebaseio.com/");

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var imageApp = angular.module('starter', ['ionic', "ngCordova", "firebase"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

imageApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("firebase", {
      url: "/firebase",
      templateUrl: "templates/firebase.html",
      controller: "FirebaseController",
      cache: false
    })
    .state("secure", {
      url: "/secure",
      templateUrl: "templates/secure.html",
      controller: "SecureController"
    });
    $urlRouterProvider("/firebase");
});
