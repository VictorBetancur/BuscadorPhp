<?php

  require('lib.php');
/*
    $response['nombre'] = getInfo("juan.camilo@mail.com", 'nombre');
    $response['descripcion'] = getInfo("juan.camilo@mail.com", 'descripcion');
    $response['info_basica'] = getInfo("juan.camilo@mail.com", 'id');
    $response['hoja_vida'] = getInfo("juan.camilo@mail.com", 'hoja_vida');
    $response['img'] = getInfo("juan.camilo@mail.com", 'profile_img');
    $response['msj'] = "true";

*/
//$username = $_POST['username'];
//$password = $_POST['password'];
$idcasa = $_POST['idcasa'];
//$nombre = "1";

$response['Direccion'] = getInfo($idcasa , 'Direccion');
$response['Ciudad'] = getInfo($idcasa, 'Ciudad');
$response['Telefono'] = getInfo($idcasa, 'Telefono');
$response['Codigo_Postal'] = getInfo($idcasa, 'Codigo_Postal');
$response['Tipo'] = getInfo($idcasa, 'Tipo');
$response['Precio'] = getInfo($idcasa, 'Precio');
$response['msj'] = "true";
  echo json_encode($response);





 ?>
