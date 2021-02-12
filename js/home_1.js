/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function iniciar()
{
    var app = angular.module("myApp", []);
//    .config(function($stateProvider, $urlRouterProvider) {
//            $stateProvider
//                .state('alta', {
//                    url: '/alta',
//                    templateUrl: 'template/header.html',
//                    controller: 'ctrlAlta'
//                })
//                .state('editar', {
//                    url: '/editar/{id}',
//                    templateUrl: 'views/editar.html',
//                    controller: 'ctrlEditar'
//                });
//
//            $urlRouterProvider.otherwise('alta');
//        }
//    );
        app.controller("myCtrl", function($scope) {
            $scope.sesion = sesionjs;
            $scope.menu = menujs;
        });
    
    
    
    Vue.component('component-titulo-descripcion',{
        template: '#titulo_descripcion_template',
        props:['titulo','descripcion'],
    });
    Vue.component('component-menu-sesion',{
        template: '#menu_sesion_template',
        props:['nombre','link'],
    });
            Vue.component('casa-vue',{
            template: '#casa_template',
            props:['nombre','imagen'],
            });
            
            new Vue({
            el: '#app',
            data: {
              descripcion_p:{
                titulo:"Proyectos",
                descripcion:"Los siguientes proyectos fueron desarrollados",
              },
              proyectos:proyectosjs,
              sesion:sesionjs,
              menu:menujs,
              contactos:contactosjs,
              ejemplo:{
                    id:1,
                    nombre:"Luis"
              },
              plantilla:"<h1>Ejemplo</h1><h1>{{id}}</h1><h1>{{nombre}}</h1>"
            }
          });
        }
        window.addEventListener("load", iniciar, false);


