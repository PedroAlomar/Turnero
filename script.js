document.getElementById("turnoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    // Obtiene los valores del formulario
    var name = document.getElementById("name").value;
    var time = document.getElementById("time").value;
    
    // Crea un nuevo elemento de lista con los datos del turno
    var listItem = document.createElement("li");
    listItem.textContent = name + " - " + time;
    
    // Agrega el elemento a la lista de turnos
    document.getElementById("turnoList").appendChild(listItem);
    
    //

    // Define una variable para almacenar los turnos
var turnos = [];

// Agrega un listener al formulario para guardar los turnos
document.getElementById("turnoForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  var name = document.getElementById("name").value;
  var time = document.getElementById("time").value;
  
  // Verifica si el turno está ocupado
  var turnoOcupado = turnos.some(function(turno) {
    return turno.time === time;
  });

  if (turnoOcupado) {
    document.getElementById("message").textContent = "El turno seleccionado está ocupado.";
  } else {
    // Guarda el turno en el arreglo
    turnos.push({
      name: name,
      time: time

      


    });
    
    // Crea un nuevo elemento de lista con los datos del turno
    var listItem = document.createElement("li");
    listItem.textContent = name + " - " + time;
    
    // Agrega el elemento a la lista de turnos
    document.getElementById("turnoList").appendChild(listItem);
    
    // Muestra el mensaje de éxito
    document.getElementById("message").textContent = "El turno para " + name + " fue guardado con éxito.";
  }
});

// Agrega la animación al botón de guardar turno
var guardarTurnoButton = document.querySelector("#turnoForm button");
guardarTurnoButton.addEventListener("click", function() {
  guardarTurnoButton.classList.add("animacion-botón");
});

