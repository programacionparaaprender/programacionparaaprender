/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myApp = angular.module("myApp", ['ngRoute', 'ngResource']).run(function($rootScope) {
	/* $rootScope.authenticated = false;
	$rootScope.current_user = '';
	
	$rootScope.signout = function(){
    	$http.get('auth/signout');
    	$rootScope.authenticated = false;
    	$rootScope.current_user = '';
	}; */
});

myApp.config(function($routeProvider){
	$routeProvider
		//the timeline display
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
});

myApp.controller('mainController', function(postService, $scope, $rootScope){
	$scope.sesion = sesionjs;
        $scope.menu = menujs;
        $scope.contactos = contactosjs;
        $scope.descripcion_p = {
            titulo:"Proyectos",
            descripcion:"Los siguientes proyectos fueron desarrollados"
        };
        $scope.proyectos = proyectosjs;
});

function iniciar()
{
    
}
window.addEventListener("load", iniciar, false);


