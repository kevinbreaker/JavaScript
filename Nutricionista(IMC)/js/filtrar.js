let filtro    = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input",function(){

  let pacientes = document.querySelectorAll(".paciente");
  console.log(this.value);

  if(this.value.length > 0){
    for(let i=0;i<pacientes.length;i++){
      let paciente  = pacientes[i];
      let tdNome    = paciente.querySelector(".info-nome");
      let nome      = tdNome.textContent;
      let expressao = new RegExp(this.value,"i");

      if(!expressao.test(nome)){
        paciente.classList.add("invi");
      }else{
        paciente.classList.remove("invi");
      }
    }
  }else {
    for (let i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invi");
    }
  }
});
