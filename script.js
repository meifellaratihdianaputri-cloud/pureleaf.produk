function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        window.location.href = "main.html";
    } else {
        alert("Silakan isi username dan password.");
    }
}

function previewImage(event) {
    const preview = document.getElementById("preview");
    preview.src = URL.createObjectURL(event.target.files[0]);
    preview.style.display = "block";
}
