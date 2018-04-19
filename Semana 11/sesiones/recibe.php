<?php 
session_start();

$_SESSION['nombre'] = isset($_GET['nombre']) ? $_GET['nombre']:'no identificado';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Su nombre es <?php echo $_SESSION['nombre']?></title>
</head>
<body>
    Su nombre es <?php echo $_SESSION['nombre']?>
</body>
</html>