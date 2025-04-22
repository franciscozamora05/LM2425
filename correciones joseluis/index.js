var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var intentos = 0;

function verificarNumero() {
    var inputNumero = document.getElementById("numeroInput");
    var outputDiv = document.getElementById("output");

    intentos++;

    var numeroIngresado = parseInt(inputNumero.value);

    if (numeroIngresado === numeroAleatorio) {
        outputDiv.innerHTML = "¡Adivinaste! El número era " + numeroAleatorio;
        outputDiv.innerHTML += "<div id='resultado'> Adivinaste</div>";
        aplicarEstiloAcierto(outputDiv);

        reiniciarJuego();
    } else if (numeroIngresado < numeroAleatorio) {
        outputDiv.innerHTML = "El número es mayor. Intentos: " + intentos;
        resetearEstilo(outputDiv);
    } else {
        outputDiv.innerHTML = "El número es menor. Intentos: " + intentos;
        resetearEstilo(outputDiv);
    }

    inputNumero.value = "";
}

function reiniciarJuego() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    intentos = 0;

    var outputDiv = document.getElementById("output");
    resetearEstilo(outputDiv);
}

function resetearEstilo(elemento) {
    elemento.innerHTML += "<div id='resultado'></div>";
}

function aplicarEstiloAcierto(elemento) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.textDecoration = "underline";
    resultadoDiv.style.fontWeight = "bold";
    resultadoDiv.style.fontSize = "36px";
}