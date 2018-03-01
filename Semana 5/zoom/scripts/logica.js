var botonZoom = document.getElementById("btn-zoom");

var imagen = document.getElementById("imagen");

var zoom = function(){
    if(imagen.className === "imagen-normal"){
        imagen.className = "imagen-zoom";
        botonZoom.textContent = "Reducir";
    }else{
        imagen.className = "imagen-normal";
        botonZoom.textContent = "Zoom";
    }
};

imagen.onclick = zoom;

botonZoom.onclick = zoom;
