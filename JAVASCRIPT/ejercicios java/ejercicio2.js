function convertir() {
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const tipo = document.getElementById("tipo").value;
    const tasa = 0.94; // 1 $ = 0.94 €
    const resultado = tipo === "dolares" ? cantidad / tasa : cantidad * tasa;
    document.getElementById("resultado").innerText = 
      `Resultado: ${resultado.toFixed(2)}`;
  }