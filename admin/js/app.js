var admin = angular.module("admin",["ui.router"]);



admin.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    .state("login",{
        url:"/login",
        templateUrl :"login.html",
        controller :"loginController"
    })
    .state("home",{
        url:"/home",
        templateUrl : "home.html",
        controller :"homeController"
    });
});

// creating services

admin.service('dologin',function(){
        firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
})