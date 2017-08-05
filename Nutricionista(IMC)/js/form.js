botao.addEventListener('click',(event)=>{
  event.preventDefault();

  let form       = document.querySelector('#formulario');

  // Extrair informações do paciênte no formulário.
  let paciente   = pacienteForm(form);


let erro = validaPaciente(paciente);
if(erro.length > 0){
  exibirErrosMsg(erro);
  //msgErro.textContent = erro;
  return;
}
adicionarPacientTabela(paciente);

//Limpando formulario
form.reset();
let msgerros = document.querySelector("#msg-erro");
msgerros.innerHTML = "";
});

function adicionarPacientTabela(paciente) {
  //Criando HTML do paciênte
  let pacienteDados = pacienteHTML(paciente);
  let tabPacient    = document.querySelector("#tabela-pacientes");
  //Adicionando os paciêntes a tabela
  tabPacient.appendChild(pacienteDados);

}

function exibirErrosMsg(erro){
  let ul = document.querySelector('#msg-erro');

  ul.innerHTML = "";

  erro.forEach((erro)=> {
    let li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}

function pacienteForm(form) {
  let paciente = {
    nome    : form.nome.value,
    peso    : form.peso.value,
    altura  : form.altura.value,
    gordura : form.gordura.value,
    imc     : imcCalc(form.altura.value,form.peso.value)
  }
  return paciente;
}

function pacienteHTML(paciente){
  let tr      = document.createElement("tr");
  tr.classList.add("paciente");

  tr.appendChild(montaTd(paciente.nome,"info-nome"));
  tr.appendChild(montaTd(paciente.peso, "info-peso"));
  tr.appendChild(montaTd(paciente.altura, "info-altura"));
  tr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  tr.appendChild(montaTd(paciente.imc, "info-imc"));

  return tr;
}

function validaPaciente(paciente) {

  let erros = [];

  if(paciente.nome.length == 0){
    erros.push("O nome não pode ser vazio.");
  }
  if(paciente.gordura == 0){
    erros.push("A gordura não pode ser zero.")
  }
  if(!validarPeso(paciente.peso)){
   erros.push("O peso está inválido.")
  }
  if(!validarAltura(paciente.altura)){
    erros.push("A altura está inválida;");
  }
  return erros;
}

function montaTd (dado,classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
