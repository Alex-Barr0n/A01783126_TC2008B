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
  } // Se ejecuta cuando se hace clic en el botón "Get Full Name" /*El botón es submit no "Get Full Name"*/

  // 3.- Adds rows or cols on command
const table = document.getElementById("sampleTable");
const rowButton = document.getElementById("btn-insert-r");
const colButton = document.getElementById("btn-insert-c");

rowButton.addEventListener("click", function() {

    const newRow = table.insertRow();
    const columns = table.rows[0].cells.length;
    let j = 3;
    for (let i = 0; i < columns; i++) {
        const newRowCell = newRow.insertCell();
        newRowCell.textContent = "Row " + " Column " + (i+1);
    }
});
