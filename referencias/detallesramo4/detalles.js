const btn = document.getElementById('main-btn');

btn.addEventListener('click', function() {
    // Animación de escala al presionar
    this.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        this.style.transform = 'scale(1.05)';
        this.innerHTML = '¡Agregado! 💖';
        this.style.background = '#00d4ff'; // Cambia a azul al éxito
    }, 150);
});

// Movimiento suave del blob de fondo con el mouse
document.addEventListener('mousemove', (e) => {
    const blob = document.querySelector('.blob');
    const x = e.clientX;
    const y = e.clientY;
    
    blob.style.left = x + 'px';
    blob.style.top = y + 'px';
});
