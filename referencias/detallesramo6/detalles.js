const card = document.querySelector('.card-3d');
const container = document.querySelector('.scene');

// Movimiento de la tarjeta con el mouse
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animar entrada suave
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
});

// Volver a la posición original
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// Feedback del botón
document.getElementById('buy-btn').addEventListener('click', function() {
    this.innerText = "❤️ ¡Añadido!";
    this.style.borderColor = "#d4af37";
});
