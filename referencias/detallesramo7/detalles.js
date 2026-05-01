const btn = document.getElementById('buy-btn');

btn.addEventListener('click', () => {
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1.02)';
        btn.querySelector('span').innerText = '¡Procesando! ✨';
    }, 100);
});

// Animación simple para la imagen al entrar
document.querySelector('.main-img').addEventListener('mouseenter', () => {
    document.querySelector('.main-img img').style.transform = 'scale(1.1)';
});

document.querySelector('.main-img').addEventListener('mouseleave', () => {
    document.querySelector('.main-img img').style.transform = 'scale(1)';
});
