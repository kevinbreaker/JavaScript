$("#botao-frase").click(fraseAleatoria);
$("#botao-fraseId").click(buscaFrase);

function fraseAleatoria() {
  $("#spinner").toggle();
  $.get("http://localhost:3000/frases",trocaAleatoria)
  .fail(()=>{
    $("#erro").toggle();
    setTimeout(()=>{
      $("#erro").toggle();
      },2300);
    })
  .always(()=>{
    $("#spinner").toggle();
  });
}

function trocaAleatoria(data) {

  let frase = $(".frase");
  let numAleatorio = Math.floor(Math.random() * data.length);

  frase.text(data[numAleatorio].texto);
      initFraseTamanho();
      initTempo(data[numAleatorio].tempo);
}

function buscaFrase() {
  $("#spinner").toggle();

  let fraseId = $("#frase-id").val();
  let dados = {id: fraseId };
  console.log("Enviando: "+fraseId);

  $.get("http://localhost:3000/frases",dados,trocaFrase)
  .fail(()=>{
    $("#erro").toggle();
    setTimeout(()=>{
      $("#erro").toggle();
      },2300);
    })
  .always(()=>{
    $("#spinner").toggle();
  });
}

function trocaFrase(data){
let frase = $(".frase");
frase.text(data.texto);
initFraseTamanho();
initTempo(data.tempo);
  console.log(data);
}
