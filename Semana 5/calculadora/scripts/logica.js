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
var lastOperator = "";

document.getElementById("operator-+").onclick = function () {
    memoria += Number(pantalla.getAttribute("value"));
    pantalla.setAttribute("value",0);
    lastOperator = "+";
};

document.getElementById("operator-=").onclick = function () {
    switch(lastOperator){
        case "+":
            memoria += Number(pantalla.getAttribute("value"));
            lastOperator = "";
            break;
    }
    pantalla.setAttribute("value",memoria);
};

document.getElementById("operator-c").onclick = function () {
    memoria = 0;
    pantalla.setAttribute("value",0);
};
