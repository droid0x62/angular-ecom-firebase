admin.controller("loginController",["$scope","$log","$state",function($scope,$log,$state){
    
    //checking if auth state has changed
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            $state.go("home");
            $log.info("User is  logged in");
        }
        else{
            $log.warn("Not logged in");
        }
    })
        
    
    
    $scope.username = "";
    $scope.password="";
    
    //login with email id and password firebase
        $scope.login = function(){
             firebase.auth().signInWithEmailAndPassword($scope.username,$scope.password).catch(function(error){
            $log.warn(error.code);
            $log.warn(error.message);
            alert(error.message)
        })
        
    };
    
      
}]);