<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Receptor</title>
</head>

<body>
    <?php if (isset($_GET['nombre'],$_GET['pass'])) { ?>
        <div>Tu nombre es:
            <?php echo $_GET['nombre']; ?>
        </div>
        <div>Tu contraseña es:
            <?php echo $_GET['pass']; ?>
        </div>
    <?php }?>
</body>

</html>
