<?php
    include('constantes.php');
    require('header.php');
?>
    
    <h2><?php
        $numero_1 = 10;
        $numero_2 = 20;
        $saludo = 'La operacion '.$numero_1.' + '.$numero_2.' = '.($numero_1+$numero_2).' Fue ejecutada en el servidor';
        print($saludo); 
        ?></h2>
        
<?php 
    require('footer.php');
?>