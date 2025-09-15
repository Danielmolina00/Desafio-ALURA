const inputAmigos = document.getElementById("amigo");
const listaAmigos = [];
const ullistaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById ("resultado");


function agregarAmigo() {
  const nombre = inputAmigos.value.trim();
if ( nombre === "") {
 alert("Por favor, ingresa el nombre de un amigo.");
return;
}
if (listaAmigos.includes(nombre)) {
 alert("Este amigo ya está en la lista.");
 return;
}
if (/[0-9]/.test(nombre)) {
 alert("El nombre no debe contener números.");
 return;
} 
listaAmigos.push(nombre); 
ullistaAmigos.innerHTML += `<li>${nombre}</li>`;
inputAmigos.value = "";
}


function sortearAmigo(){ 
    const Sorteo = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[Sorteo];
   ulResultado.innerHTML = `el amigo sorteado es : ${amigoSecreto}`;
    
}

function reiniciarSorteo() {
     listaAmigos.length = 0;
     ullistaAmigos.innerHTML = "";
     ulResultado.innerHTML = "";
     inputAmigos.value = "";
 
}
