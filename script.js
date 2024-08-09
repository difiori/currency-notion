function updateConversion() {
  const euros = parseFloat(document.getElementById("euros").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const reais = euros * rate;

  document.getElementById("reais").textContent = `R$ ${reais.toFixed(2).replace('.', ',')}`;
}

document.getElementById("euros").addEventListener("input", updateConversion);
document.getElementById("rate").addEventListener("input", updateConversion);

// Inicializa a conversão
updateConversion();
