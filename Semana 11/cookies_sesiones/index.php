<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cookies</title>
</head>
<body>
    <?php 
        if (isset($_GET['nombre'])){
            setcookie('nombre',$_GET['nombre']);
        }
        
        if (isset($_COOKIE['nombre'])){
            echo '<p>Tu nombre es '.$_COOKIE['nombre'].'</p>';
        }
    ?>
    <form action="index.php">
        <input type="text" name="nombre" id="nombre" placeholder="Tu Nombre">
        <input type="submit" value="Enviar">
    </form>
</body>
</html>