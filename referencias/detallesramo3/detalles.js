const cartBtn = document.getElementById('cart-btn');

cartBtn.addEventListener('click', function() {
    // Animación de feedback
    const originalText = this.querySelector('.btn-label').innerText;
    this.querySelector('.btn-label').innerText = 'Agregado a la bolsa';
    this.style.background = '#ff85a1';
    
    // Crear un efecto de confeti rosa básico en la consola o pantalla
    console.log("🌸 Producto seleccionado");

    setTimeout(() => {
        this.querySelector('.btn-label').innerText = originalText;
        this.style.background = '';
    }, 2500);
});

// Efecto de inclinación (Tilt) ligero en la tarjeta
const card = document.querySelector('.luxury-card');
card.addEventListener('mousemove', (e) => {
    const { x, y, width, height } = card.getBoundingClientRect();
    const cx = x + width / 2;
    const cy = y + height / 2;
    const dx = (e.pageX - cx) / (width / 2);
    const dy = (e.pageY - cy) / (height / 2);
    
    card.style.transform = `perspective(1000px) rotateX(${dy * -2}deg) rotateY(${dx * 2}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});
