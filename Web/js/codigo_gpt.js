//Estos comentarios son de copilot
/*Estos comentarios son míos*/ 

document.addEventListener("mousemove", function(event) 
{
    let mouseX = event.clientX; // Posición del mouse en X
    let mouseY = event.clientY; // Posición del mouse en Y
    let mousePositionElement = document.getElementById("mousePosition"); // Elemento HTML donde se mostrará la posición del mouse
    mousePositionElement.innerHTML = "Posición del mouse: X = " + mouseX + ", Y = " + mouseY; // Se muestra la posición del mouse
}
); // Se ejecuta cuando el mouse se mueve

function getFullName() {
    let firstName = document.getElementById("firstName").value; // Se obtiene el valor del campo de texto del nombre
    let lastName = document.getElementById("lastName").value; // Se obtiene el valor del campo de texto del apellido
    let fullName = firstName + " " + lastName; // Se concatena el nombre y el apellido
    let fullNameResult = document.getElementById("fullNameResult"); // Elemento HTML donde se mostrará el nombre completo
    fullNameResult.textContent = "Full Name: " + fullName; // Se muestra el nombre completo
};// Se ejecuta cuando se hace clic en el botón "Get Full Name" /*El botón es submit no "Get Full Name"*/


document.addEventListener("DOMContentLoaded", function(event) 
{
    let table = document.getElementById("miTabla"); // Se obtiene la tabla
    let addRowButton = document.getElementById("agregarFila"); // Se obtiene el botón de agregar fila
    let addColumnButton = document.getElementById("agregarColumna"); // Se obtiene el botón de agregar columna
  
    addRowButton.addEventListener("click", function() 
    {
      let newRow = table.insertRow(); // Se inserta una nueva fila
      for (let i = 0; i < table.rows[0].cells.length; i++)  // Se recorren las columnas de la primera fila
      {
        let cell = newRow.insertCell(); // Se inserta una nueva celda
        cell.innerHTML = "Nueva fila "; // Se agrega el texto a la celda
      }
    });
  
    addColumnButton.addEventListener("click", function() 
    {
      for (let i = 0; i < table.rows.length; i++) // Se recorren las filas de la tabla
      {
        let cell = table.rows[i].insertCell(); // Se inserta una nueva celda
        cell.innerHTML = "Nueva columna "; // Se agrega el texto a la celda
      }
    });
});
  
/*Los comentarios de este ejercicio (4) los hizo GPT*/
document.addEventListener("DOMContentLoaded", function(event) {
    // Obtener elementos de entrada
    let filaInput = document.getElementById("filaInput");
    let columnaInput = document.getElementById("columnaInput");
    let textoInput = document.getElementById("textoInput");
    let actualizarBtn = document.getElementById("actualizarBtn");
    let tabla = document.getElementById("tabla");
  
    // Manejar evento clic en el botón
    actualizarBtn.addEventListener("click", function() {
      // Obtener los valores de fila, columna y texto ingresados por el usuario
      let fila = parseInt(filaInput.value);
      let columna = parseInt(columnaInput.value);
      let texto = textoInput.value;
  
      // Verificar si la fila y la columna son válidas
      if (fila > 0 && columna > 0 && fila <= tabla.rows.length && columna <= tabla.rows[0].cells.length) {
        // Actualizar el contenido de la celda seleccionada
        tabla.rows[fila - 1].cells[columna - 1].textContent = texto;
      } else {
        // Mostrar un mensaje de error si la posición es inválida
        alert("Posición de fila o columna inválida.");
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function(event) 
  {
    let botonActualizar = document.getElementById("actualizar"); // Se obtiene el botón de actualizar

    botonActualizar.addEventListener("click", function() // Se agrega un evento de clic al botón de actualizar
    {
      let fila = parseInt(document.getElementById("fila").value); // Se obtiene el valor del campo de texto de la fila
      let columna = parseInt(document.getElementById("columna").value); // Se obtiene el valor del campo de texto de la columna
      let texto = document.getElementById("texto").value; // Se obtiene el valor del campo de texto de la columna
      
      let tabla = document.getElementById("tabla"); // Se obtiene la tabla
      if (fila >= 0 && fila < tabla.rows.length && columna >= 0 && columna < tabla.rows[fila].cells.length) // Se verifica que la fila y la columna sean válidas
      {
        tabla.rows[fila].cells[columna].innerHTML = texto; // Se actualiza el contenido de la celda
      }
    });
  });
  
document.addEventListener("DOMContentLoaded", function(event) 
{
    let botonAgregar = document.getElementById("agregar"); // Se obtiene el botón de agregar

    botonAgregar.addEventListener("click", function() 
    {
      let lista = document.getElementById("lista"); // Se obtiene la lista
      /*Modifiqué la lista de colores (pero si le pedí los colores, en otro chat, a ChatGPT)*/
      let opciones = ["Rojo", "Azul", "Verde", "Amarillo", "Naranja", "Violeta", "Rosa", "Blanco", "Negro", "Gris", "Marrón", "Dorado", "Plateado", "Turquesa", "Magenta"];
      let colorAleatorio = opciones[Math.floor(Math.random() * opciones.length)]; /*Entre tus opciones sca una random durante cual sea que sea la longitud.*/
      
      /*Copilot dejó de responder, ChatGPT va a hacer los comentarios con doble línea desde aquí*/
      // Se crea un nuevo elemento de opción
      let nuevaOpcion = document.createElement("option");
      
      // Se asigna el valor y el texto de la nueva opción
      nuevaOpcion.value = colorAleatorio;
      nuevaOpcion.text = colorAleatorio.charAt(0).toUpperCase() + colorAleatorio.slice(1);
      
      // Se agrega la nueva opción a la lista
      lista.add(nuevaOpcion);
    });
    
    // Se obtiene el botón de quitar mediante su id
    let botonQuitar = document.getElementById("quitar");
    
    // Se agrega un evento de clic al botón de quitar
    botonQuitar.addEventListener("click", function() {
      
      // Se obtiene la lista mediante su id
      let lista = document.getElementById("lista");
      
      // Se verifica si la lista tiene elementos
      if (lista.options.length > 0) {
        // Se remueve la opción seleccionada de la lista
        lista.remove(lista.selectedIndex);
      }
    });
});

// Se agrega un evento que se dispara cuando el DOM se ha cargado completamente
document.addEventListener("DOMContentLoaded", function(event) {
  
    // Se obtiene la imagen mediante su id
    let imagen = document.getElementById("imagen");
  
    // Se agrega un evento de mouseenter a la imagen
    imagen.addEventListener("mouseenter", function() {
      
      // Se definen las dimensiones mínimas y máximas para la imagen
      let minWidth = 300;
      let maxWidth = 600;
      let minHeight = 300;
      let maxHeight = 600;
      
      // Se genera un ancho y alto aleatorio dentro de los límites definidos
      let width = getRandomNumber(minWidth, maxWidth);
      let height = getRandomNumber(minHeight, maxHeight);
      
      // Se actualiza la imagen con una URL que contiene el ancho y alto aleatorios
      imagen.src = `https://via.placeholder.com/${width}x${height}`;
      
      // Se actualiza el estilo de la imagen para que tenga el ancho y alto aleatorios
      imagen.style.width = `${width}px`;
      imagen.style.height = `${height}px`;
    });
});

// Función que genera un número aleatorio dentro de un rango dado
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}