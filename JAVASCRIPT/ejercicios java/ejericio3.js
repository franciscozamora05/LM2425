function convertir() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultado").innerText = 
      `${celsius} °C son ${fahrenheit.toFixed(1)} °F`;
  }