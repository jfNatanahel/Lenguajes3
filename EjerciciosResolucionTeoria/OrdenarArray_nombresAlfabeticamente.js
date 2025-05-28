// Lista fija que vos definís
let nombresFijos = ["Carlos", "Lourdes", "Natanahel", "Andrea"];

// Lista donde se guardan los nombres que ingresa el usuario
let nombresUsuario = [];

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
