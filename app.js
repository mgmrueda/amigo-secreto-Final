let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo"); // Asegúrate que el ID coincide con tu HTML
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    if (amigos.length === 0) {
        let li = document.createElement("li");
        li.textContent = "No hay amigos en la lista.";
        li.style.fontStyle = "italic";
        lista.appendChild(li);
        return;
    }

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo} `;

        // Botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.onclick = function() {
            eliminarAmigo(index);
        };

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agregue al menos un nombre.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").textContent = "Amigo Secreto: " + amigoSorteado;
}