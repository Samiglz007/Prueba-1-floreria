document.getElementById('btn-cart').addEventListener('click', function() {
    const btn = this;
    const text = btn.querySelector('.btn-text');
    
    // Cambiar estado a "Cargando"
    text.innerText = 'Agregando...';
    btn.style.pointerEvents = 'none';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        text.innerText = '¡En el carrito! ✨';
        btn.style.background = '#55efc4'; // Verde menta éxito
        btn.style.opacity = '1';
        
        // Regresar a la normalidad después de 3 segundos
        setTimeout(() => {
            text.innerText = 'Agregar al Carrito';
            btn.style.background = '';
            btn.style.pointerEvents = 'all';
        }, 3000);
    }, 1000);
});
