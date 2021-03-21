alert("paso1");
var inputUser =$('#user')
inputUser.on('keypress',function(e){
  if(e.which===13){
      alert("seguir1.1");
      //cargarMasComentarios();
      //alert("seguir1.2");
  }
 })


 $('#formulario').submit(function(event){
   alert("paso2");
  var nombre = $('form').find('input[name="nombre_usuario"]').val();
  event.preventDefault();
  $.ajax(
    {
      url:'./recepcion_formulario.php',
      type: 'post',
      data: {nombre: nombre},
//adicional
      success: function(data){
       if (data=="true") {
         alert("Esto esta malo");
       }else {
          alert("Esto esta bueno");
         alert("dato:"+data);
       }
      }
      //adicional
    }
  ).done(function(data){
    alert(data);
  })
  });
