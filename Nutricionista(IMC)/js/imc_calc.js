
let titulo         =  document.querySelector(".titulo");
titulo.textContent = 'Nutricionista';

let pacientes = document.querySelectorAll(".paciente");
let botao     = document.querySelector("#adicionar-paciente");

for(let i=0;i < pacientes.length;i++){

  let paciente = pacientes[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let peso   = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura   = tdAltura.textContent;

  let tdimc = paciente.querySelector(".info-imc");

  let pesoValido   = validarPeso(peso);
  let alturaValida = validarAltura(altura);

  if(!pesoValido){
    alert("Peso inválido!!");
    valPeso = false;
    tdimc.textContent = "Peso inválido !";
    paciente.classList.add('paciente-invalido');

  }
  if(!alturaValida){
    alert("altura inválida !!");
    valPeso = false;
    tdimc.textContent = "altura inválido !";
    paciente.classList.add('paciente-invalido');
  }

  if(pesoValido && alturaValida){
    let imc = imcCalc(altura,peso);
    tdimc.textContent = imc;
    }
}
function validarPeso(peso) {
  if(peso > 30 && peso < 300){
    return true;
  }else {
    return false;
  }
}
function validarAltura(altura) {
  if(altura > 1 && altura < 3){
    return true;
  }else{
    return false;
  }

}

function imcCalc(altura, peso) {
  imc = 0;
  imc =  peso / (altura**2);
  if(imc > 20 ){
    imc.innerCSS
  }

  return imc.toFixed(2);
  }
