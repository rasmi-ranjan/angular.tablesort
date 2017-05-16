var sortTableModule = angular.module('tableSort', []);
sortTableModule.controller('TestTableSortController', function ($scope, $http) { 
  
  $scope.noDataText = '';
  $scope.columns = [{"label":"userId","width":"10%"}, {"label":"id","width":"10%"}, {"label":"title","width":"20%"}, {"label":"body","width":"60%"}];
  $scope.sort = {
    sortingOrder: 'id',
    reverse: false
  };
  // functions have been describe process the data for display 

  $scope.changeSorting = function (column) {
    var sort = $scope.sort;
    if (sort.sortingOrder == column) {
      sort.reverse = !$scope.sort.reverse;
    } else {
      sort.sortingOrder = column;
      sort.reverse = false;
    }
  };

  $scope.sortedColumn = function (column) {
    if (column === $scope.sort.sortingOrder) {
      return ('tablesort-' + (($scope.sort.reverse) ? 'desc' : 'asc'));
    }
    else {
      return 'fa fa-sort'
    }
  };
  var onSuccess = function (response) {
     $scope.tableData = response.data;
  };

 var onError = function (reason) {
     $scope.noDataText = 'No data found';
  };

  $scope.initialize = function () {
    $http.get("http://jsonplaceholder.typicode.com/posts").then( onSuccess, onError );
  };

});
sortTableModule.$inject = ['$scope', '$http'];