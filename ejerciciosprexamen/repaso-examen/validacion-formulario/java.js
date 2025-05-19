document.addEventListener("DOMContentLoaded", () => {
    let formulario = document.getElementById("formularioRegistro");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // Evitar el envío por defecto
        let valido = true;

        // Obtener campos
        let nombre = document.getElementById("nombre").value.trim();
        let apellidos = document.getElementById("apellidos").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let email = document.getElementById("email").value.trim();
        let contrasena1 = document.getElementById("contrasena1").value;
        let contrasena2 = document.getElementById("contrasena2").value;
        let aceptarTerminos = document.getElementById("aceptarTerminos").checked;

        // Validar nombre
        if (nombre === "") {
            mostrarError("error-nombre", "El nombre es obligatorio.");
            valido = false;
        } else {
            ocultarError("error-nombre");
        }

        // Validar apellidos
        if (apellidos === "") {
            mostrarError("error-apellidos", "Los apellidos son obligatorios.");
            valido = false;
        } else {
            ocultarError("error-apellidos");
        }

        // Validar teléfono (solo dígitos, 9 caracteres típicos)
        if (!/^\d{9}$/.test(telefono)) {
            mostrarError("error-telefono", "Introduce un teléfono válido de 9 dígitos.");
            valido = false;
        } else {
            ocultarError("error-telefono");
        }

        // Validar email básico
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            mostrarError("error-email", "Introduce un correo electrónico válido.");
            valido = false;
        } else {
            ocultarError("error-email");
        }

        // Validar contraseña
        if (contrasena1.length < 6) {
            mostrarError("error-contrasena1", "La contraseña debe tener al menos 6 caracteres.");
            valido = false;
        } else {
            ocultarError("error-contrasena1");
        }

        // Validar repetición de contraseña
        if (contrasena1 !== contrasena2) {
            mostrarError("error-contrasena2", "Las contraseñas no coinciden.");
            valido = false;
        } else {
            ocultarError("error-contrasena2");
        }

        // Validar términos
        if (!aceptarTerminos) {
            mostrarError("error-terminos", "Debes aceptar los términos de uso.");
            valido = false;
        } else {
            ocultarError("error-terminos");
        }

        if (valido) {
            alert("¡Registro completado con éxito!");
            formulario.reset(); // Limpiar formulario tras validación correcta
            document.querySelectorAll(".error").forEach(el => el.classList.remove("activo"));
        }
    });

    function mostrarError(id, mensaje) {
        let campoError = document.getElementById(id);
        campoError.textContent = mensaje;
        campoError.classList.add("activo");
    }

    function ocultarError(id) {
        let campoError = document.getElementById(id);
        campoError.textContent = "";
        campoError.classList.remove("activo");
    }
});
