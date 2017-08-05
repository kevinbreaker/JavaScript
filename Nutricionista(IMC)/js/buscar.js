let botaoAdc = document.querySelector("#buscar-pacientes");

botaoAdc.addEventListener("click",()=>{
  let xhr = new XMLHttpRequest();

xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

xhr.addEventListener("load",()=>{

  if(xhr.status == 200){
    let resposta  = xhr.responseText;
    let pacientes = JSON.parse(resposta);

    pacientes.forEach((paciente)=>{
      adicionarPacientTabela(paciente);
    });
  }else{
    console.log(xhr.status);
    console.log(xhr.responseText);
    alert("Erro ao buscar pacientes.  " + xhr.status);
  }
});
xhr.send();
});
