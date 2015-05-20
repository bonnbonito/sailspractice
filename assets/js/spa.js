/**
*  Module
*
* Description
*/
angular.module('Bonn', []);
angular.module('Bonn', []).controller('BigoyCtrl', ['$scope', function ($scope) {

		io.socket.get('/emoji', function (data) {
			$scope.emojis = data;
			$scope.$apply();
		});

		io.socket.on('emoji', function (event){
			switch (event.verb) {
				case 'created': $scope.emojis.push(event.data);
					$scope.$apply();
					break;
			}
		})
    
}]);
