<?php include('../validador.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Seleciona color</title>
    <link rel="stylesheet" href="css/<?php echo $color; ?>.css">
</head>
<body>
    <h2>Escoje tu color favorito <?php echo $nombre; ?></h2>
    <form action="index.php" method="post">
        <select name="color" id="color">
            <option value="blanco">blanco</option>
            <option value="negro">negro</option>
            <option value="azul">azul</option>
        </select>
        <input type="submit" value="Cambiar">
    </form>
</body>
</html>