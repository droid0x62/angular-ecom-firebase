app.controller("loginController",["$scope","$state",function($scope,$state){
    
    
    //social login
    $scope.googleLogin = function(){
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user);
        }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
            });
        }
    
    $scope.facebookLogin = function(){
        var provider1 = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider1).then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
        }).catch(function(error){
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
    }
    
    
    firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log("user logged  in");
              $state.go('home');

          } else {
            console.log("not signed yet");
          }
        });
    
    }]);

