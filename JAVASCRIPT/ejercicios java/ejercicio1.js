document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enviarButton").onclick = mostrarMensaje;
  });

  function mostrarMensaje() {
    const usuario = document.getElementById("user").value;
    const contrasena = document.getElementById("pass").value;
    document.getElementById("mensaje").innerText = 
      `Bienvenido usuario ${usuario} con la contraseña ${contrasena}`;
  }