<?php
    require('variablesBD.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ver actores</title>
</head>
<body>
    <?php 
        $con = mysqli_connect($host,$usuario,$contrasena,$base_datos);
        if($con){
            echo 'me conecte a '.$base_datos;
        }else{
            echo 'error de conetZion '.$base_datos;
        }
    ?>
</body>
</html>