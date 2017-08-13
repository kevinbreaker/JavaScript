$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(enviaPlacar);


// ### Placar ###
function initPlacar() {
  let corpoTabela = $(".placar").find("tbody");
  let usuario     = $("#usuarios").val();
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

function enviaPlacar() {
  let placar = [];
  let linhas = $("tbody>tr");

  linhas.each(function() {
    let usuario  = $(this).find("td:nth-child(1)").text();
    let palavras = $(this).find("td:nth-child(2)").text();

    let score = {
      usuario : usuario,
      pontos  : palavras
    }

    placar.push(score);

    let dados = {
      placar: placar
    }

    $.post("http://192.168.15.8:3000/placar",dados,function() {
      console.log("Funcionou: "+dados);
      $(".tooltip").tooltipster("open");
    }).fail(()=>{
      $(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar"); 
    }).always(()=>{
      setTimeout(()=>{
        $(".tooltip").tooltipster("close");
      },1400);
    });
  });
}

function atualizaPlacar() {
  $.get("http://192.168.15.8:3000/placar",(data)=>{
    $(data).each(function() {
      let linha = novaLinha(this.usuario, this.pontos);
      linha.find(".botao-remover").click(removeLinha);
      $("tbody").append(linha);
    });
  });
}
