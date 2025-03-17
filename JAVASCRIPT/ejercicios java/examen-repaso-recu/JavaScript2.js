let tareas = [];

function actualizarLista() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";
    tareas.forEach(tarea => {
        let item = document.createElement("li");
        item.textContent = tarea;
        lista.appendChild(item);
    });
}

function agregarTarea() {
    let tarea = document.getElementById("tarea").value.trim();
    if (tarea === "") {
        alert("Ingrese una tarea válida.");
        return;
    }
    tareas.push(tarea);
    document.getElementById("tarea").value = "";
    actualizarLista();
}

function eliminarUltimaTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas para eliminar.");
        return;
    }
    tareas.pop();
    actualizarLista();
}

function buscarTarea() {
    let tareaBuscar = document.getElementById("buscar").value.trim();
    let resultado = document.getElementById("resultadoBusqueda");
    
    if (tareaBuscar === "") {
        resultado.textContent = "Ingrese una tarea para buscar.";
        return;
    }
    
    let indice = tareas.indexOf(tareaBuscar);
    if (indice !== -1) {
        resultado.textContent = `La tarea \"${tareaBuscar}\" está en la lista.`;
    } else {
        resultado.textContent = `La tarea \"${tareaBuscar}\" no está en la lista.`;
    }
}
