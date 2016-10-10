window.addEventListener("load" , cargarPagina);
 var mensaje = document.getElementById("mensajes");
 var chat = document.getElementById("chat");
 var msmAdicional = document.getElementById("mensaje");
 var contactos = document.getElementsByClassName("avatar");
 var horaAvatar = document.getElementById("hora"); 
 

 for (var i = 0 ; i<contactos.length ; i++){
 	contactos[i].addEventListener("click" , cambiarHeader)
 }
 
function cargarPagina(){
	mensaje.addEventListener("keypress" , mostrarMensaje)
}

/*<div class="w-message w-message-out">
  	<div class="w-message-text">
  		<p>Antes parecia mufasa jajajaja</p>
  		<div class="time">11:14</div>
  	</div>
  </div>*/
function mostrarMensaje(e){
	if (e.keyCode == 13 ){
	var burbujaGrande = document.createElement("div");
	var burbuja = document.createElement("div");
	var parrafo = document.createElement("p");
	var time = document.createElement("div");

	burbujaGrande.setAttribute("class" , "w-message w-message-out");
	burbuja.setAttribute("class" , "w-message-text");
	time.setAttribute("class" , "time");

	burbujaGrande.appendChild(burbuja);
	burbuja.appendChild(parrafo);
	burbuja.appendChild(time);

	parrafo.textContent = mensaje.value;
	var horaActual= new Date;
	time.innerHTML = horaActual.getHours() + ":" + horaActual.getMinutes() ;

	chat.insertBefore(burbujaGrande , chat.lastchild);
	mensaje.value = "";

	msmAdicional.textContent = parrafo.textContent;
	hora.innerHTML = horaActual.getHours() + ":" + horaActual.getMinutes() ;
	}
}

function cambiarHeader(){
	var header = document.getElementsByTagName("header")[0];
	header.getElementsByTagName("h4")[0].textContent = "hola";
}
