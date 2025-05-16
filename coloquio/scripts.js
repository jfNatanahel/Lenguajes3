// Este archivo contiene las funciones que se utilizan en el formulario de la página web
//Leer el valor desde JS
let valor = document.getElementById("valor").value; //Me devuelve un string
let numero = parseInt(valor); //Me devuelve un número entero


function calcularDoble(){
    let numero = Number(document.getElementById("valor").value); //Me devuelve un número entero
    let resultado = numero * 2;
    document.getElementById("resultado").innerHTML = "El doble es: " + resultado;

}
function calcularFactorial(){
    let numero = Number(document.getElementById("valor").value); //Me devuelve un número entero
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    document.getElementById("resultado").innerHTML = "El factorial es: " + resultado;

}
function esPrimo(){
    let numero = Number(document.getElementById("valor").value);
    
    if (numero  <= 1) {
        document.getElementById("resultado").innerHTML = numero + " no es primo";
        return;
    }
    let esPrimo = true;
    for (let i=2; i< numero; i++){
        if (numero % i == 0){
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        document.getElementById("resultado").innerHTML = numero + " es primo";
    } else {
        document.getElementById("resultado").innerHTML = numero + " no es primo";
    }

}