const Elemento = document.querySelector("#mensagem")
const textoMotivacional  = "Nunca desista dos seus sonhos! Você é capaz de conquistar tudo o que quiser!"

function mostrarMensagem(){

    if(Elemento.innerHTML ===""){

       Elemento.innerHTML= textoMotivacional; 
    }  
    else{

        Elemento.innerHTML= "";  
    }
}