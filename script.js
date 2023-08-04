// Capturar los valores del formulario
var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var cantidad = document.getElementById("cantidad");
var listado = document.getElementById("listado");

// Inicializar la variable que contiene la cantidad de tareas pendientes
var total = 0;

// función para agregar la tarea al listado
btn.onclick = function () {
    // Validar que el campo Input no esté vacio
    if (inputTarea.value == "") {
        return;
    }
    else {
        // Capturar el valor del campo input
        var elemento = inputTarea.value;
        // Crear el elemento li;
        var li = document.createElement("li");
        li.innerHTML = elemento;
        // Agregar el elemento li al listado
        listado.appendChild(li);

        // Incrementar el valor de la variable que contiene la cantidad de tareas pendientes
        total++;
        cantidad.innerHTML = total;

        // Agregar boton de eliminar a cada elemento del listado
        var btnEliminar = document.createElement("span");
        btnEliminar.textContent = "\u00d7";
        li.appendChild(btnEliminar);

        // Agregar funcionalidad al boton eliminar
        btnEliminar.onclick = function () {
            li.remove();
            total --;
            cantidad.innerHTML = total;
        }

        // Limpiar el input
        inputTarea.value = "";
    }
}