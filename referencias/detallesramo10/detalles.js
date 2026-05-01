// Crear cursor personalizado
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Paraleje suave en la imagen
    const img = document.getElementById('hero-img');
    const moveX = (e.clientX - window.innerWidth/2) / 50;
    const moveY = (e.clientY - window.innerHeight/2) / 50;
    img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
});

// Interacción del botón
const btn = document.getElementById('cta');
btn.addEventListener('click', function() {
    this.style.transform = 'scale(0.9)';
    setTimeout(() => {
        this.innerHTML = '<span class="btn-text">AÑADIDO AL ARCHIVO</span>';
        this.style.borderColor = '#fff';
    }, 200);
});

// Animación de entrada "Reveal"
window.onload = () => {
    document.querySelector('.experience-card').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.experience-card').style.transition = 'opacity 2s ease';
        document.querySelector('.experience-card').style.opacity = '1';
    }, 100);
};
