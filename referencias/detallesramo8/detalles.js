const btn = document.getElementById('order-btn');

btn.addEventListener('click', function() {
    this.querySelector('.btn-label').innerText = "Pieza Reservada";
    this.querySelector('.btn-line').style.background = "#b38b59";
    this.querySelector('.btn-line').style.width = "100%";
    
    // Pequeño efecto de vibración premium
    navigator.vibrate(50);
});

// Movimiento de la imagen según el scroll (Parallax)
window.addEventListener('scroll', () => {
    const img = document.getElementById('main-photo');
    let value = window.scrollY;
    img.style.top = value * 0.5 + 'px';
});
