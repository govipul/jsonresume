var resumeApp = angular.module('jsonResumeApp',[]);

resumeApp.controller("headerController", function headerController($scope, fileService){
  var init = function(){
    $scope.data = {};
    fileService.getData().then(function(data){
      $scope.firstName = data["first-name"];
      $scope.lastName = data["last-name"];
      $scope.about= data.about;
      $scope.experience = data.experience;
      $scope.recommendations = data.recommendations;
      $scope.social=data.social;
      $scope.email = data.email;
      $scope.mobile=data["mob-number"];
    });
  }
  init();
});

resumeApp.service('fileService', function($http){
  this.getData = function(){
    return $http({
        method : "GET",
        url:"js/data.json"
    }).then(function successCallBack(response){
      console.log(response.data);
      return response.data;
    }, function errorCallBack(response){
      console.log("ERROR: "+ response);
    });
  }
});
