(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.name = "";
    $scope.message = "";
    $scope.sayMessage = function(){
      var splitString = $scope.name.split(',');
      if($scope.name.length === 0){
        $scope.message = "Please enter data first";
      }
      else if(splitString.length<=3){
        $scope.message = "Enjoy!"
      }
      else {
        $scope.message = "Too much!"
      }
      return $scope.message;
    };
    $scope.cssClass = function(){
      if($scope.message === "Please enter data first"){
        return "Red";
      }
      else {
        return "Green";
      }
    }
  };
})();
