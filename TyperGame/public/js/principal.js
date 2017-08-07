var tempoOrigin = $("#tempo").text(); // tempo inicial guardado.
var campo = $(".campoDigitacao"); // campo de digitação

$(document).ready(()=>{
    initFraseTamanho();
    initContador();
    initCronometro();
    initMarcador();
    $("#reinicio").click(initReiniciar);
});
//###### Obtendo a frase e alterando as informações. #######
function initFraseTamanho() {
  let frase   = $(".frase").text();
  let tamanho = frase.split(" ");
  tamanho     = tamanho.length;

  $("#palavras").text(tamanho+" palavras");
}
//###### Obtendo o campo de digitação e alterando automaticamente o placar. #####
function initContador() {
  campo.on("input",()=>{
    let captura   = $(".campoDigitacao").val();
    let character = captura.length;
    let palavra   = captura.split(/\s+/).length - 1; // Expressão regular para optimizar a contagem, e -1, para evitar um bug.
    $("#contador-caracteres").text(character+" Caracteres");
    $("#contador-palavras").text(palavra+" Palavras");
  });
}
// ##### inicia Game ####
function initCronometro(){
  let tempo = $("#tempo").text();
    campo.one("focus",()=>{
      $("#reinicio").attr("disabled",true);
      let cronometroId = setInterval(()=>{
        tempo--;
        $("#tempo").text(tempo);
        if(tempo <=0){
          clearInterval(cronometroId);
          gameOver();
        }
      },1000);
    });
  }
//#### Reinicio ####
function initReiniciar() {
    campo.attr("disabled",false);
    $("#contador-palavras").text(0+" palavras");
    $("#contador-caracteres").text(0+" Caracteres");
    $("#tempo").text(tempoOrigin);
    campo.val("");
    campo.toggleClass("campo-desativado");
    campo.removeClass("campoVerde campoVermelho");
    initCronometro();
}

// ### Marcação dos pontos
function initMarcador () {
  let frase = $(".frase").text();
  campo.on("input",()=>{
    let digitado = campo.val();
    let verifica = frase.substr(0,digitado.length);
    if(digitado == verifica){
      campo.addClass("campoVerde");
      campo.removeClass("campoVermelho");
    }else {
      campo.addClass("campoVermelho");
      campo.removeClass("campoVerde");
    }
  });
}

// Game-Over
function gameOver() {
  $("#reinicio").attr("disabled",false);
  campo.attr("disabled",true);
  campo.toggleClass("campo-desativado");
  initPlacar();
}
