const falasDoLuy = {
  inicio: "Chegou no ArmazeneJá! Aqui a logística encontra o espaço ideal 🧠",
  buscar: "Tá em busca do espaço ideal? Eu te ajudo nessa jornada!",
  login: "Se cadastre ou entre, vamo deixar tudo organizadinho ✍️",
  cubagem: "Calcula direitinho a cubagem pra não pagar a mais, hein!",
  pagamento: "Pagamento seguro só por aqui! Cuidado com golpes! 💳",
  parceiros: "Temos parceiros top pra te ajudar no transporte 🚚"
};

function mudarAba(aba) {
  const abas = document.querySelectorAll(".aba");
  abas.forEach(div => div.style.display = "none");

  document.getElementById(aba).style.display = "block";

  const fala = falasDoLuy[aba] || "Vamos lá!";
  document.getElementById("fala-do-luy").textContent = fala;
}

function calcularCubagem() {
  const altura = parseFloat(document.getElementById("altura").value) || 0;
  const largura = parseFloat(document.getElementById("largura").value) || 0;
  const profundidade = parseFloat(document.getElementById("profundidade").value) || 0;
  const valorM3 = parseFloat(document.getElementById("valorM3").value) || 0;

  const cubagem = altura * largura * profundidade;
  const preco = cubagem * valorM3;

  const resultado = `Cubagem: ${cubagem.toFixed(2)} m³ | Valor a pagar: R$ ${preco.toFixed(2)}`;
  document.getElementById("resultadoCubagem").textContent = resultado;
}
