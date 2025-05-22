let libros = [];

function Agregar_Libro(){
    let titulo = document.getElementById("titulo_libro").value;
    let precio = document.getElementById("precio_libro").value;

    if (titulo=="" || precio==""){
        alert("Completa los campos porfavor...");
        return;
    }
    if(precio<=0){
        alert("Precio debe ser mayor a 0.")
        return;
    }

    libros.push({titulo: titulo, precio: parseFloat(precio)});
    mostrarLibros();

    //Limpiar el contenido
    document.getElementById("titulo_libro").value="";
    document.getElementById("precio_libro").value="";
}

function mostrarLibros(){
    let lista = document.getElementById("lista_libros");

    //IMPORTANTE!! BORRAR TODO LO Q HAYA DENTRO DEL DIV
    lista.innerHTML = "<b>Libros Disponibles</b>";

    for(let i=0; i<libros.length; i++){
        let individual = libros[i]
        let nuevoLibro = document.createElement("p");
        nuevoLibro.innerHTML = "Titulo del libro: "+ individual.titulo + "<br>" + 
        "Precio: $"+individual.precio + "<br>" + 
        "<button onclick="agregarAlCarrito('${individual.titulo}', ${individual.precio})">Añadir al carrito</button><hr>";
        //innerHTML permite meter etiquetes HTML (no solo texto plano como innerText)
        lista.appendChild(nuevoLibro); 
    }
}
function agregarAlCarrito(titulo, precio) {
  var carrito = document.getElementById("carrito_compras");

  var itemCarrito = document.createElement("div");
  itemCarrito.innerHTML = `
    📖 ${titulo} - $${precio}
    <button onclick="this.parentElement.remove()">Eliminar</button>
  `;

  carrito.appendChild(itemCarrito);
}