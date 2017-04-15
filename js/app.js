var app = angular.module("app",["ui.router"]);


app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state("login",{
        url:"/login",
        templateUrl:"login.html",
        controller :"loginController"
    })
    .state("home",{
        url:"/home",
        templateUrl:"home.html",
        controller :"homeController"
    })
    ;
    
});

app.controller("navController",["$scope","$state",function($scope,$state){
    $scope.userStatusBtn = "Login/Signup";
    $scope.logBtnStatus = false;
    
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            $scope.username = user.displayName;
            $scope.userStatusBtn = "Hi , "+ $scope.username;
            $scope.logBtnStatus = true;
        }
    });
    
    $scope.signOut = function(){
                firebase.auth().signOut().then(function() {
                 $state.go("home");
                  $scope.userStatusBtn = "Login/Signup";
                 $scope.logBtnStatus = false;  
                
                }).catch(function(error) {

                });
    }
}]);

