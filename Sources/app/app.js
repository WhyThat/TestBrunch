(function(){
	"use strict";
	var angular = require('angular');

	angular.module('app', []).controller('test',($scope) => {
		$scope.test = "Toto";
	});
})();