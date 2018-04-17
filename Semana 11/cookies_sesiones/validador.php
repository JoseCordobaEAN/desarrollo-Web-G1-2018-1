<?php
    if (isset($_COOKIE['color'])){
        $color = $_COOKIE['color'];
    } else {
        $color = 'blanco';
    }

    if (isset($_POST['color'])){
        setcookie('color', $_POST['color']);
        header("Refresh:0");
    }

    if (isset($_GET['nombre'])){
            setcookie('nombre',$_GET['nombre']);
    }
        
    if (isset($_COOKIE['nombre'])){
        $nombre = $_COOKIE['nombre'];
    }
?>