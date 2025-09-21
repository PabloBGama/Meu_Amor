const fotos = [
  "assets/nossos2meses.semtexto.jpg",
  "assets/banheiroposformatura.jpg",
  "assets/diadoshopping1.jpg",
  "assets/diadoshopping2.jpg",
  "assets/diadoshopping2.2.2.jpg",
  "assets/vceomio.jpg",
  "assets/vcsorrindodedourada.jpg",
  "assets/vctirandomaquiagem.jpg",
  "assets/vctampandoorosto.jpg",
  "assets/vcdormindo.jpg",
]

let indiceAtual = 0
const fotoElement = document.getElementById("assets")

// função para trocar as imagens
function trocarFoto() {
  fotoElement.src = fotos[indiceAtual]
  indiceAtual = (indiceAtual + 1) % fotos.length
}

// já mostra a primeira
trocarFoto()

// troca a cada 5 segundos
setInterval(trocarFoto, 5000)

// CONTADOR DE TEMPO JUNTOS
function atualizarContador() {
  const dataInicio = new Date("2025-06-23T00:03:00") // Data de início do relacionamento
  const agora = new Date()
  const diferenca = agora - dataInicio;

  //CONVERTER DIFERENÇA PARA UNIDADE
  const segundosTotais = Math.floor(diferenca / 1000);
  const minutosTotais = Math.floor(segundosTotais / 60);
  const horasTotais = Math.floor(minutosTotais / 60);
  const diasTotais = Math.floor(horasTotais / 24);
  const anos = Math.floor(diasTotais / 365);

  const dias = diasTotais % 365;
  const horas = horasTotais % 24;
  const minutos = minutosTotais % 60;
  const segundos = segundosTotais % 60;

  //MOSTRAR NA TELA
  document.getElementById("contador").textContent =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

//atualiza logo ao caregar a página
atualizarContador();

//atualiza a cada segundo

setInterval(atualizarContador, 1000);
