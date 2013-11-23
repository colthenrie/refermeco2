angular.module('mean.system').controller('IndexController', ['$scope', 'Global', '$http', function ($scope, Global, $http) {
    $scope.global = Global;

    $scope.list1 = 
    [
        {name: 'AngularJS', reject: true},
        {name: 'Is'},
        {name: 'teh'},
        {name: '@wesome'}
    ];
  
    $scope.list2 = [];

    console.log(window.user.linkedin_id);

   

    $http.get('http://api.linkedin.com/v1/people/id='+window.user.linkedin_id+'/connections?format=json').then( function (data) {
    	console.log(data);
    	$scope.connections=data.data
    });
}]);