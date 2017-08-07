$("#botao-placar").click(mostraPlacar);


// ### Placar ###
function initPlacar() {
  let corpoTabela = $(".placar").find("tbody");
  let usuario     = "Kevin";
  let numPalavras = $("#contador-palavras").text();
  let linha       =  novaLinha(usuario,numPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.prepend(linha);

  $(".placar").slideDown(700);
  scrollPlacar();
}

function scrollPlacar(){
  let posicaoPlacar = $(".placar").offset().top;
  $("body").animate({scrollTop: posicaoPlacar+"px"},1000);
}

function novaLinha(usuario,numPalavras) {
  let linha       = $("<tr>");
  let colUsuario  = $("<td>").text(usuario);
  let colPalavras = $("<td>").text(numPalavras);
  let colRemover  = $("<td>");

  let link        = $("<a>").addClass("botao-remover").attr("href","#");
  let icone       = $("<i>").addClass("small material-icons").text("delete");

  link.append(icone);
  colRemover.append(link);
  linha.append(colUsuario);
  linha.append(colPalavras);
  linha.append(colRemover);

  return linha;
}

function removeLinha(event) {
  event.preventDefault();
  let linha =  $(this).parent().parent();
  linha.fadeOut(800);
  setTimeout(()=>{
    linha.remove();
  },800);
};

function mostraPlacar() {
  $(".placar").stop().slideToggle(700);
}
