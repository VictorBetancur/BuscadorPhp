<?php

  require('lib.php');
//VARIABLE idcasa VIENE DEL ARCHIVO INDEX.JS Y SE LLAMA CON POST
// EL ARCHIVO DELVUEVE LOS DATOS EN $RESPONSE
$idcasa = $_POST['idcasa'];

$opcionVix = $_POST['opcionVix'];
$rangoPrecioVix = $_POST['rangoPrecioVix'];
$selectCiudadVix = $_POST['selecttipoVix'];
$selecttipoVix = $_POST['selecttipoVix'];
//opcion 1 muestra todos los datos sin filtros
if ($opcionVix==1) {

  $response['Direccion'] = getInfo($idcasa , 'Direccion');
  $response['Ciudad'] = getInfo($idcasa, 'Ciudad');
  $response['Telefono'] = getInfo($idcasa, 'Telefono');
  $response['Codigo_Postal'] = getInfo($idcasa, 'Codigo_Postal');
  $response['Tipo'] = getInfo($idcasa, 'Tipo');
  $response['Precio'] = getInfo($idcasa, 'Precio');
  $response['msj'] = "true";
  echo json_encode($response);
  //opcion 2 muestra los datos con los filtros establecidos
}elseif ($opcionVix==2) {
  $response['Direccion'] = getInfo($idcasa , 'Direccion');
  $response['Ciudad'] = getInfo($idcasa  , 'Ciudad');
  $response['Telefono'] = getInfo($idcasa , 'Telefono');
  $response['Codigo_Postal'] = getInfo($idcasa , 'Codigo_Postal');
  $response['Tipo'] = getInfo($idcasa  , 'Tipo');
  $response['Precio'] = getInfo($idcasa  , 'Precio');
  $response['msj'] = "true";
  echo json_encode($response);

}else{
  $response['msj'] = "false";
  echo json_encode($response);
}






 ?>
