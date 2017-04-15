app.controller('homeController',['$scope','$timeout','$state',function($scope,$timeout,$state){
   
    
    
    $scope.slides = [
        {image :"img/1.jpeg",description : "Image one"},
        {image : "img/2.jpeg",description : "Image two"},
        {image :"img/3.jpeg",description : "Image three"},
        {image :"img/4.jpeg",description : "Image three"},
        {image :"img/5.jpeg",description : "Image three"}
    ]
    
    $scope.currentImage =0;
    $scope.isCurrentImage = function(index){
        return $scope.currentImage === index;
    }
    
    var autoSlider = function(){
        $scope.currentImage++;
        if($scope.currentImage > 4){
            $scope.currentImage = 0;
        }
        $timeout(autoSlider,3000);
    }
    $timeout(autoSlider,3000);
   
    
    
    
}]);