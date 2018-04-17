<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Mi cookie</title>
</head>

<body>
    <?php if(isset($_COOKIE['nombre'])){?>
        <p>mi cookie es:
            <?php echo $_COOKIE['nombre']?>
        </p>
    <?php }else{
        echo 'No hay &#127850;';    
    } ?>
</body>

</html>
