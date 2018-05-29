<?php 

require('variables.php');
$conexion = mysqli_connect($host,$usuario,$contrasena,$base);
    if($conexion){
        $q = $_REQUEST["q"];
        $consulta = "SELECT * FROM news WHERE title LIKE '".$q."%'";
        $datos = mysqli_query($conexion, $consulta);
        $linea = mysqli_fetch_array($datos);
        echo $linea['title'] == ""?'No hay sugerencia':$linea['title'];
    }else{
        echo 'paila no se conectó';
    }