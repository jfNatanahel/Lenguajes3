//Lista para guardar libros
let libros = []

function agregarLibro(){
    let EntradaTitulo = document.getElementById("inputTitulos").value;
    let EntradaPrecio = document.getElementById("inputPrecio").value;

    //Validacion
    if(EntradaTitulo =="" || EntradaPrecio==""){
        alert("Completar campos!")
        return;
    }

    //Agregar los libros
    libros.push({
        titulo: EntradaTitulo,
        precio: parseFloat(EntradaPrecio)
    })

    //Mostrar en pantalla
    let ul = document.getElementById("listaLibros");
    let li = document.createElement("li");
    li.textContent = `Titulo: ${EntradaTitulo}  Precio: ${EntradaPrecio}`
    ul.appendChild(li)
    li.appendChild(document.createElement("br"));


    //Crear boton agregar carrito
    let botonCarrito = document.createElement("button");
    botonCarrito.textContent = "Agregar al carrito";

    // Evento al hacer clic en "Agregar al carrito"
    botonCarrito.onclick = function(){
        agregarAlCarrito(entradaTitulo, entradaPrecio);
    };


    //Agregar el boton al li
    li.appendChild(document.createElement("br"));
    li.appendChild(botonCarrito)
    ul.appendChild(li)

    
    //Limpiar inputs
    document.getElementById("inputLibros").value=""
    document.getElementById("inputPrecio").value=""



}

let carrito = []
function agregarAlCarrito(titulo,precio){
    carrito.push({
        titulo: titulo,
        precio: parseFloat(precio)
    })
    let ulCarrito = document.getElementById("CarritoCompras")
    let liCarrito = document.createElement("li")
    liCarrito.innerHTML = `${titulo} - ${precio}`

    // Botón eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    liCarrito.appendChild(botonEliminar);
    ulCarrito.appendChild(liCarrito)

}