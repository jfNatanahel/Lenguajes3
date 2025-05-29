// Lista fija que vos definís
let nombresFijos = ["Carlos", "Lourdes", "Natanahel", "Andrea"];

// Lista donde se guardan los nombres que ingresa el usuario
let nombresUsuario = [];

//Lista para guardar numeros
let numerosUsuario=[];
function ordenarNombresFijos() {
    let copia = [nombresFijos]; // Para no modificar el array original
    copia.sort();
    document.getElementById("resultadoFijos").innerHTML = copia.join(", ");
    console.log(copia);
}

function agregarNombre() {
    let nombre = document.getElementById("nombreInput").value.trim();
    if (nombre) {
        nombresUsuario.push(nombre);
        document.getElementById("nombreInput").value = "";
        console.log(nombresUsuario);
    }
}

function ordenarNombresUsuario() {
    let copia = [nombresUsuario];
    copia.sort();
    document.getElementById("resultadoUsuario").innerHTML = copia.join(", ");
    console.log(copia);
}
function agregarNumero() {
    let inputUsuario = document.getElementById("numerosInput");
    let numeroInputUsuario = Number(inputUsuario.value); //Paso a tipo Number

    // Validar que no esté vacío
    if (inputUsuario.value !== "") {
 
        numerosUsuario.push(numeroInputUsuario); //Agrego a la lista
        inputUsuario.value = ""; //
        //inputUsuario.focus(); //
        console.log("Array actual:", numerosUsuario);
    } else {
        alert("Por favor, ingresa un número");
    }
}
function mostrarNumeros() {
    if (numerosUsuario.length === 0) { //Verifico si la lista tiene 0 numeros entonces esta vacia.
        alert("Aún no ingresaste ningún número");
        return; // Salimos de la función para no ejecutar lo demás
    }
    let contenedor = document.getElementById("listaNumeros");
    contenedor.innerHTML = ""; // Limpio antes de mostrar, para que no se repita

    for (let numero of numerosUsuario) {
        contenedor.innerHTML += `<li>${numero}</li>`;
    }
}
function mostrarNombres(){
    if (nombresUsuario.length==0){
        alert("Ingresar un nombre porfavor")
        return
    }
    let contenedor = document.getElementById("listaNombres");
    contenedor.innerHTML="" //Limpio antes de mostrar
    for(let nombres of nombresUsuario){
        contenedor.innerHTML+= `<li>${nombres}</li>`; 
    }

}
function sumaTotal() {

    let suma = 0;
    for (let numero of numerosUsuario) { // numerosUsuario array
        suma = suma + numero;
    }
    document.getElementById("resultadoSuma").innerHTML = "La suma total es: " + suma; //Mostrar
}

function buscarNombres(){
    let nombre_buscado = document.getElementById("buscarInputs").value.trim()
    if (nombre_buscado == ""){
        alert("Escribir un nombre")
        return; //Importante salir de la funcion!!
    }
    // Verificamos si ese nombre está en el array de nombresUsuario
    if (nombresUsuario.includes(nombre_buscado)){
        alert("✅ Nombre encontrado")
    }else{
        alert("-1")
    }
    

}
function listaDinamica(){
    let ul = document.getElementById("listaDinamica");
    ul.innerHTML = "";  // Limpio la lista antes de agregar de nuevo

    for (let nombre of nombresUsuario){
        let li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    }
}
function modificarContenido(id, nuevoTexto) {
    let elemento = document.getElementById(id); //Obtengo el elemento del id
    if (elemento) {
        elemento.textContent = nuevoTexto; //textContent cambia al nuevo texgto
    } else {
        alert("No se encontró ningún elemento con ese ID.");
    }
}
// Obtengo los elementos del DOM y los guardo en variables
let boton = document.getElementById("miBoton");
let parrafo = document.getElementById("miParrafo");

// Defino una función para cambiar el estilo
function cambiarEstilo() {
  parrafo.classList.toggle("resaltado");
}

// Le agrego un "escuchador de eventos" al botón
boton.addEventListener("click", cambiarEstilo);
