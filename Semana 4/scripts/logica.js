/**
Ejemplo de JavaScript para la clase de desarrollo web grupo 1 de la universidad EAN
@author: Jose Cordoba
@since: 20/02/2018
*/
//La sintaxis de java script es similar
//a la de C o Java

//Podemos escribir en la consola
console.log("Hola mundo");

//O podemos escribir en una alerta
alert("Hola mundo");

//Para escribir en el documento
document.write("<h1>Hola Mundo</h1>");

//podemos crear varibles
var boleano = true;

//También podemos usar estructuras de decisión
if (!boleano) {
    console.log("opcion falsa");
} else {
    console.log("opcion verdadera");
}

// podemos crear arreglos
var tequilas = ['jose cuervo', 'olmeca', '1800', 'maestro tequilero', 'cabrito', 'la herradura', 'agave azul'];

//Y podemos recorrerlos con el ciclo for
for(var i=0;i<tequilas.length; i++){
    console.log(tequilas[i]);
}

//o vaciarlos como una pila usando while
while(tequilas.length>0){
    console.log(tequilas.pop());
}

/**
 * Calcula el perimetro de un triangulo
 * @param   {Number} lado1 el primer lado del triangulo
 * @param   {Number} lado2 el segundo lado del triangulo
 * @param   {Number} lado3 el tercer lado del triangulo
 * @returns {Number} El perimetro del triangulo
 */
function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

/**
 * Calcula el semiperimetro de un triangulo
 * @param   {Number} lado1 el primer lado del triangulo
 * @param   {Number} lado2 el segundo lado del triangulo
 * @param   {Number} lado3 el tercer lado del triangulo
 * @returns {Number} El semiperimetro del triangulo
 */
function semiperimetroTriangulo(lado1,lado2,lado3){
    return perimetroTriangulo(lado1,lado2,lado3)/2;
}

/**
 * Calcula el area de un triangulo
 * @param   {Number} lado1 el primer lado del triangulo
 * @param   {Number} lado2 el segundo lado del triangulo
 * @param   {Number} lado3 el tercer lado del triangulo
 * @returns {Number} El area del triangulo
 */
function areaTriangulo(lado1,lado2,lado3){
    var semiperimetro = semiperimetroTriangulo(lado1,lado2,lado3);
    var s_lado1 = semiperimetro - lado1;
    var s_lado2 = semiperimetro - lado2;
    var s_lado3 = semiperimetro - lado3;
    return (semiperimetro*s_lado1*s_lado2*s_lado3)**(1/2)
}