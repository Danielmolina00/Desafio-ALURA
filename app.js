const inputAmigos = document.getElementById("amigo");
const listaAmigos = [];
const ullistaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById ("resultado");


function agregarAmigo(){
  
listaAmigos.push(inputAmigos.value); 

ullistaAmigos.innerHTML += `<li>${inputAmigos.value}</li>`
};

function sortearAmigo(){ 
    const Sorteo = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[Sorteo];
   ulResultado.innerHTML = `el amigo sorteado es : ${amigoSecreto}`;
    
}



