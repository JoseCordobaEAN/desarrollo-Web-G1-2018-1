var pantalla = document.getElementById("pantalla");

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

var btnNumeros = document.getElementsByClassName("btn-num");

for (var i = 0; i < btnNumeros.length; i++) {
    btnNumeros[i].onclick = numClick;
}

var memoria = 0;

document.getElementById("operator-+").onclick = function () {
    memoria += Number(pantalla.getAttribute("value"));
    pantalla.setAttribute("value",memoria);
};
