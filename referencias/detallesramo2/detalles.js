const btn = document.getElementById('buy-btn');

btn.addEventListener('mouseenter', () => {
    btn.querySelector('.icon').style.transform = 'translateX(10px)';
});

btn.addEventListener('mouseleave', () => {
    btn.querySelector('.icon').style.transform = 'translateX(0px)';
});

btn.addEventListener('click', function() {
    this.style.width = '60px';
    this.querySelector('.text').style.display = 'none';
    this.querySelector('.icon').innerHTML = '✓';
    
    setTimeout(() => {
        alert("Añadido a tu colección privada.");
        location.reload(); // Reset para el ejemplo
    }, 800);
});
