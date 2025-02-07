document.addEventListener("DOMContentLoaded", function () {
    mostrarComentarios(); // Mostrar comentarios guardados al cargar la página
});

function agregarComentario() {
    var texto = document.getElementById("caja-comentario").value;

    if (texto.trim() === "") {
        alert("No puedes enviar un comentario vacío.");
        return;
    }

    var listaComentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    listaComentarios.push(texto);
    localStorage.setItem("comentarios", JSON.stringify(listaComentarios));

    mostrarComentarios(); // Refrescar la lista de comentarios en la pantalla
    document.getElementById("caja-comentario").value = ""; // Limpiar caja de texto
}

function mostrarComentarios() {
    var listaComentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    var contenedor = document.getElementById("lista-comentarios");
    contenedor.innerHTML = ""; // Limpiar la lista antes de mostrar los comentarios

    listaComentarios.forEach(function (comentario) {
        var nuevoComentario = document.createElement("p");
        nuevoComentario.textContent = comentario;
        contenedor.appendChild(nuevoComentario);
    });
}
