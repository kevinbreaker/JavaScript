$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
  $.get("http://localhost:3000/frases",trocaAleatoria);

}

function trocaAleatoria(data) {

  let frase = $(".frase");
  let numAleatorio = Math.floor(Math.random() * data.length);


  frase.text(data[numAleatorio].texto);
}
