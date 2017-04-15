admin.controller("homeController",["$scope","$log","$state",function($scope,$log,$state){
    
    $scope.logout = function(){
        firebase.auth().signOut().then(function(){
            $state.go('login');
            $log.info("User logged out succesfully");
        }).catch(function(error){
            $log.warn(error.code);
            $log.warn(error.message);
        })
    }
    
}]);
