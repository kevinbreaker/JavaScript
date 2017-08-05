
let tabela = document.querySelectorAll("table");

tabela.forEach((paciente)=>{
    paciente.addEventListener("dblclick",function(event){
        //parentNode sobe um nível, indo para 
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(()=>{
            event.target.parentNode.remove();
        }, 500);
        
   
    });
});