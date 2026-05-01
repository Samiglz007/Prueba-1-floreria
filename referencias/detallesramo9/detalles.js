const btn = document.getElementById('action-btn');

btn.addEventListener('mouseenter', () => {
    // El botón se desplaza un poco como si fuera físico
    btn.style.boxShadow = "8px 8px 0px #ffdae9";
    btn.style.transform = "translate(-4px, -4px)";
});

btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = "0px 0px 0px #ffdae9";
    btn.style.transform = "translate(0, 0)";
});

btn.addEventListener('click', function() {
    this.innerText = "RESERVADO ✓";
    this.style.background = "#ffdae9";
    this.style.color = "#000";
});
