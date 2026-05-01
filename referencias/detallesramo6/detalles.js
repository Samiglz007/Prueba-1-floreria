document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('buy-action');
    const image = document.getElementById('main-flower');

    // Efecto de hover suave en la imagen
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });

    // Acción del botón
    btn.addEventListener('click', () => {
        btn.innerText = "Agregando...";
        setTimeout(() => {
            alert("¡Pieza agregada a tu carrito floral! 🌸");
            btn.innerText = "Adquirir pieza";
        }, 800);
    });
});
