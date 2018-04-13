<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Documento php</title>
</head>
<body>
    <?php echo date('h:i:s'); ?>
    
    <br/>
    
    <?php if(false){ ?>
        <p>hola mundo</p>    
    <?php }?>
    
    <?php for($i = 1; $i < 11; $i++){ 
        echo '<p>hola mundo  '.$i.' </p>';
    }?>
    
    
    
    
    <script src="js/main.js"></script>
</body>
</html>