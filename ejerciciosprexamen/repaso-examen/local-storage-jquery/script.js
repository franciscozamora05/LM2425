$(document).ready(function () {
    // Función para mostrar el mensaje con animación y estilo
    function mostrarMensaje(nombre) {
        $("#mensajeBienvenida")
            .text(`¡Bienvenido/a, ${nombre}!`)
            .css({
                "background-color": "#d1ecf1",
                "color": "#0c5460",
                "border": "1px solid #bee5eb",
                "font-weight": "bold"
            })
            .removeClass("oculto")
            .hide()
            .fadeIn(1000)
            .animate({ opacity: 1 }, 1000);
    }

    // Si ya hay un nombre en localStorage, mostrarlo directamente
    let nombreGuardado = localStorage.getItem("nombreUsuario");
    if (nombreGuardado) {
        mostrarMensaje(nombreGuardado);
    }

    // Manejar el envío del formulario
    $("#formularioNombre").on("submit", function (e) {
        e.preventDefault();

        let nombre = $("#nombre").val().trim();

        if (nombre !== "") {
            localStorage.setItem("nombreUsuario", nombre);
            mostrarMensaje(nombre);
        }
    });
});
