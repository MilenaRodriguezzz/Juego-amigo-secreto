let amigos = []; // crear un array

function agregarAmigo() {
    let nombreIngresado = document.querySelector("#amigo").value.trim();
    if (nombreIngresado !== "") {
        amigos.push(nombreIngresado);
        limpiarCaja();
        mostrarAmigos();
    } else {
        alert("Ingrese un nombre válido, el nombre no puede estar vacío");
    }
}

function mostrarAmigos() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
    for (let a = 0; a < amigos.length; a++) {
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[a];
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
}

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}