(function () {
  'use strict';
  angular.module('myFirstApp',[])
  .controller('MyFirstController',function ($scope) {
    $scope.name = "";
    $scope.totalValue = 0;
    var x = "hello";
    $scope.displayTotal = function(){
      var total = calculateTotal($scope.name);
      $scope.totalValue = total;
    };
    function calculateTotal(string){
      var total = 0;
      for(var i=0; i<string.length; i++){
        total += string.charCodeAt(i);
      }
      return total;
    };
  });
})();
