function calcularTotal() {
    let monto = parseFloat(document.getElementById("monto").value);
    let propinaSeleccionada = document.querySelector("input[name='propina']:checked").value;
    let resultado = document.getElementById("resultado");
    
    if (isNaN(monto) || monto <= 0) {
        resultado.innerHTML = "Por favor, ingrese un monto válido y positivo.";
        return;
    }
    
    let propina = monto * parseFloat(propinaSeleccionada);
    let total = monto + propina;
    resultado.innerHTML = `Total a pagar: $${total.toFixed(2)}`;}