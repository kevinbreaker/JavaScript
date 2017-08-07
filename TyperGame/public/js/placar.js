// ### Placar ###
function initPlacar() {
  let corpoTabela = $(".placar").find("tbody");
  let usuario     = "Kevin";
  let numPalavras = $("#contador-palavras").text();
  let linha       =  novaLinha(usuario,numPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.prepend(linha);
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
  $(this).parent().parent().remove();
};
