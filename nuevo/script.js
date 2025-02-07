<script>
document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    var commentText = document.getElementById("comment-input").value;
    if (commentText.trim() !== "") {
        var commentBox = document.createElement("div");
        commentBox.classList.add("comment-box");
        commentBox.textContent = commentText;

        document.getElementById("comments-container").appendChild(commentBox);
        document.getElementById("comment-input").value = ""; // Limpiar el textarea
    }
});
</script>