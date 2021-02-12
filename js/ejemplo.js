/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    return contenido; 
    //mostrarContenido(contenido);
  };
  return lector;
//  lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
  var elemento = document.getElementById('contenido-archivo');
  elemento.innerHTML = contenido;
}
var plantillas_prueba = leerArchivo("ejemplo.html");

Vue.component('ejemplo-vue',{
template: plantillas_prueba,
props:['id','nombre'],
});
//Vue.component('ejemplo-vue',{
//            template: '<h1>Ejemplo</h1><h1>{{id}}</h1><h1>{{nombre}}</h1>',
//            props:['id','nombre'],
//            });
