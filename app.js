// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosIngresados = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if(nombre === '') {
        alert('Ingrese un nombre valido');
        return;
    } 

    amigosIngresados.push(nombre);

    let lista = document.getElementById('listaAmigos');
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    lista.appendChild(nuevoAmigo);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';
}
function sortearAmigo() {
    if (amigosIngresados.length === 0) {
        alert('No hay amigos ingresados para sortear');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigosIngresados.length);
    let amigoSorteado = amigosIngresados[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    let amigoElemento = document.createElement('li');
    amigoElemento.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    resultado.appendChild(amigoElemento);

    document.getElementById('listaAmigos').innerHTML = '';
    amigosIngresados = [];
}




