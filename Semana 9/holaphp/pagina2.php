<?php
    include('constantes.php');
    // El encabezado de nuestra app
    require('header.php'); 

    # Este es otro comentario de una linea

    /*
        Este es un comentario de múltiples lineas
    */

    # Para crear una constante usamos la funcion define
    define("mi_candidato", 'Gusmez Petriguez');
    print(mi_candidato);
?>


<?php require('footer.php'); ?>