var imprimirHora = function (){
    var fecha = new Date();
    document.write(fecha.toLocaleTimeString());
}


setTimeout(imprimirHora(), 1000);
