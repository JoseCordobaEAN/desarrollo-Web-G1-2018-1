var pantalla = document.getElementById("pantalla");
var btnNumeros = document.getElementsByClassName("btn-num");
var memoria = 0;
var cajaHistorial = document.getElementById("caja-historial");

/**
 * Maneja los clicks a los numeros
 */
var numClick = function () {
    if (pantalla.getAttribute("value") === "0") {
        pantalla.setAttribute("value", this.textContent);
    } else {
        pantalla.setAttribute("value", pantalla.getAttribute("value") + this.textContent);
    }
};

for (var i = 0; i < btnNumeros.length; i++) {
    btnNumeros[i].onclick = numClick;
}

document.getElementById("operator-+").onclick = function () {
    var hijo = document.createElement("p");
    hijo.textContent = memoria + " + " +
        pantalla.getAttribute("value");
    memoria += Number(pantalla.getAttribute("value"));
    hijo.textContent += " = " + memoria;
    pantalla.setAttribute("value", 0);
    cajaHistorial.appendChild(hijo);
};

document.getElementById("operator-=").onclick = function () {
    pantalla.setAttribute("value", memoria);
};

document.getElementById("operator-c").onclick = function () {
    memoria = 0;
    pantalla.setAttribute("value", 0);
    while(cajaHistorial.firstChild){
        cajaHistorial.removeChild(cajaHistorial.firstChild);
    }
};
