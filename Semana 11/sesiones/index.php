<?php
session_start();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Ejercicio Sesiones</title>
</head>

<body>
    <div id="main">Su sesión es:
        <?php
            echo session_id();
        ?>
        <br/>
        Su nombre es: <?php echo isset($_SESSION['nombre']) ? $_SESSION['nombre'] : 'No identificado' ?>
    </div>
    <div id="formulario">
        <form action="recibe.php" method="get">
            <input type="text" name="nombre" id="nombre" placeholder="Su nombre">
            <input type="submit" value="Enviar">
        </form>
    </div>
</body>

</html>
