
var requestSpan = document.querySelector("#numConexiones");
var connectionSpan = document.querySelector("#Conexiones");

function CambiaJaneDoe() {
    var nump = document.querySelector("#NombreJaneDoe");
    nump.innerHTML="Juan Perez";
 }

 function EliminarUsuario(element) {
    var nump = document.querySelector(element);
    nump.remove();
    requestSpan.innerText--;
 }

 function AceptarUsuario(element) {
   var nump = document.querySelector(element);
   nump.remove();
   requestSpan.innerText--;
   connectionSpan.innerText++;
}