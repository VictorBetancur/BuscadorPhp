//VIX 0001
//FUNCION PARA DETECTAR EL ENTER DESPUES DE ESCRIBIR EN USER
/*
var inputUser =$('#user')
inputUser.on('keypress',function(e){
  if(e.which===13){
    //  alert("seguir1.1");
      //cargarMasComentarios();
      //alert("seguir1.2");
  }
 })
 */
//FUNCION PARA DETECTAR EL ENTER DESPUES DE ESCRIBIR EN USER

// FUNCION QUE SE ACTIVA AL CARGAR LA PAGINA
$(document).ready(function() {
  //alert("paso0");
  //cargarDatos();
  $('select').material_select();
 });
// FUNCION QUE SE ACTIVA AL CARGAR LA PAGINA

//VIX 0001
// FUNCION QUE SE ACTIVA CON EL BOTON MOSTRAR TODOS
var inputMostrar =$('#mostrarTodos')
inputMostrar.on('click',function(e){
//      alert("seguir1.1");
  cargarDatos(1);
 })
// FUNCION QUE SE ACTIVA CON EL BOTON MOSTRAR TODOS

// FUNCION QUE SE ACTIVA CON EL BOTON SUBMIT O BUSCAR
$('#formulario').submit(function(event){
  event.preventDefault();
  //alert("paso0");
//    window.location.href = 'index.html';
// window.location.reload()
//  alert("paso1");
  cargarDatos(2);
});
// FUNCION QUE SE ACTIVA CON EL BOTON SUBMIT O BUSCAR

//VIX 0002
function cargarDatos(opcionVix){
for (var i=1;i<=100;i++){
var rangoPrecioVix =$('#rangoPrecio').val();
var rangosSeparados=rangoPrecioVix.split(";");
var rangosArchivo;
var selectCiudadVix =$('#selectCiudad').val();
var selecttipoVix =$('#selectTipo').val();
var idcasa = i;
var form_data = new FormData();
form_data.append('opcionVix', opcionVix);
form_data.append('idcasa', idcasa);
form_data.append('rangoPrecioVix', rangoPrecioVix);
form_data.append('selectCiudadVix', selectCiudadVix);
form_data.append('selecttipoVix', selecttipoVix);


  $.ajax({
    url: "DatosIniciales.php",
    dataType: "json",
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    type: 'post',
    success: function(response){
      if (response.msj == "true") {
         //V1X SE COMENTA LA ALETA PARA FACILTAR EL CICLO
         rangosArchivo=response.Precio.split("$")
         if (1 == opcionVix) {
            setTitles(response.Direccion, response.Ciudad, response.Telefono, response.Codigo_Postal, response.Tipo,response.Precio);
            //alert("resuesta "+rangoPrecioVix + " vix " + rangosArchivo[1] + " " + rangosSeparados[1] );
            //alert("resuesta " + rangosSeparados[0] +" menor "+ rangosArchivo[1] + "  -  " + rangosSeparados[1] +" mayor "+ rangosArchivo[1] );
         }
         else{
               // SELECCION POR CIUDAD, TIPO
             if (response.Ciudad == selectCiudadVix & response.Tipo == selecttipoVix) {
              //   alert("resuesta "+selectCiudadVix +" " +selecttipoVix +" "+rangoPrecioVix);
               if (rangosArchivo[1] >= rangosSeparados[0] & rangosArchivo[1] <= rangosSeparados[1]  ) {
                  setTitles(response.Direccion, response.Ciudad, response.Telefono, response.Codigo_Postal, response.Tipo,response.Precio);
               }
             }
             else if (response.Ciudad == selectCiudadVix & "" == selecttipoVix) {
               if (rangosArchivo[1] >= rangosSeparados[0] & rangosArchivo[1] <= rangosSeparados[1]  ) {
                  setTitles(response.Direccion, response.Ciudad, response.Telefono, response.Codigo_Postal, response.Tipo,response.Precio);
               }
             }
             else if ("" == selectCiudadVix & response.Tipo == selecttipoVix)  {
               if (rangosArchivo[1] >= rangosSeparados[0] & rangosArchivo[1] <= rangosSeparados[1]  ) {
                  setTitles(response.Direccion, response.Ciudad, response.Telefono, response.Codigo_Postal, response.Tipo,response.Precio);
               }
             }
             else if ("" == selectCiudadVix & "" == selecttipoVix)  {
               //setTitles(response.Direccion, response.Ciudad, response.Telefono, response.Codigo_Postal, response.Tipo,response.Precio);
               if (rangosArchivo[1] >= rangosSeparados[0] & rangosArchivo[1] <= rangosSeparados[1]  ) {
                  setTitles(response.Direccion, response.Ciudad, response.Telefono, response.Codigo_Postal, response.Tipo,response.Precio);
               }
             }
         }
      }
      else {
          // SELECCION POR CIUDAD
          alert("ERROR EN RESPUESTA 1");
          //  window.location.href = 'login.html';
      }
     },
     error: function(){
     alert("ERROR EN RESPUESTA 2");
     //  window.location.href = 'login.html';
    }
  })
 }
}


//VIX 0002
//vix 0003
function setTitles(direccion, ciudad, telefono, codigoPostal, tipo, precio){
  $('.card-content').append('<ul><img src="./img/home.jpg"></ul>')
  $('.card-content').append('<b> Direccion: '+ direccion + '</b><p></p>')
  $('.card-content').append('<b>Ciudad: '+ ciudad    + '</b><p></p>')
  $('.card-content').append('<b>Telefono: '+ telefono  + '</b><p></p>')
  $('.card-content').append('<b>Código postal: '+ codigoPostal  + '</b><p></p>')
  $('.card-content').append('<b>Tipo: '+ tipo  + '</b><p></p>')
  $('.card-content').append('<b>Precio: '+ precio  + '</b><p></p>')

/*
  if (descripcion == "") {
    var link = document.createElement('A');
    $(link).append('Descripción').addClass('link').attr('href', 'descripcion.html');
    $('.card-panel p').text(`Aún no has escrito tu perfil. Para hacerlo dirígete a la sección `).append(link);
    $('.states li:nth-child(1) i').text('clear').css('color', '#9e9e9e');
  }else {
    $('.card-panel p').text(descripcion);
    $('.states li:nth-child(1) i').text('done').css('color', '#2196f3');
  }
  if (img == null || img == "") {
    $('.card-image img').attr('src', 'img/default.png');
  }else {
    $('.card-image img').attr('src', img);
  }
  if (info_basica == "") {
    $('.states li:nth-child(2) i').text('clear').css('color', '#9e9e9e');
  }else{
    $('.states li:nth-child(2) i').text('done').css('color', '#2196f3');
  }
  if (hoja_vida == "") {
    $('.states li:nth-child(3) i').text('clear').css('color', '#9e9e9e');
  }else{
    $('.states li:nth-child(3) i').text('done').css('color', '#2196f3');
  }
  */
}

//vix 0003

/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/

$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}

/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
/*
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}
*/
inicializarSlider();
//playVideoOnScroll();
