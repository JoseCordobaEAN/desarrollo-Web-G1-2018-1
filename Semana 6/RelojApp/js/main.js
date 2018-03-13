var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nobiembre', 'Diciembre'];
var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];


/**
 * Actualiza la fecha en mi reloj
 */
var actualizar = function () {
    var miFecha = new Date();
    document.getElementById('dia').innerHTML = dias[miFecha.getDay() - 1] + ' ' + miFecha.getUTCDate() + ' de ';
    document.getElementById('mes').innerHTML = meses[miFecha.getMonth()] + ' del ';
    document.getElementById('ano').innerHTML = miFecha.getFullYear();

    document.getElementById('hora').innerHTML = miFecha.getHours() + ' : ';
    document.getElementById('minuto').innerHTML = miFecha.getMinutes() + ' : ';
    document.getElementById('segundo').innerHTML = miFecha.getSeconds();
}

setInterval(actualizar,1000);
//alert('Hola mundo');
