//alert('Hola mundo');

document.getElementById("Encabezado").innerHTML = "<h1>Arranco mi pagina</h1>"+new Date();

var escribir = function(){
    document.getElementById("texto").innerHTML = ("<p>escribí en el documento a las "+ new Date() +"</p>");
}

//setTimeout(escribir,5000);

setInterval(escribir, 500);