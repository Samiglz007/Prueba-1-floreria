// Efecto de Zoom Suave en la imagen
const img = document.getElementById('zoom-img');
const box = document.querySelector('.main-image-wrapper');

box.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = box.getBoundingClientRect();
    const x = (e.clientX - left) / width * 100;
    const y = (e.clientY - top) / height * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(1.5)";
});

box.addEventListener('mouseleave', () => {
    img.style.transform = "scale(1)";
});

// Feedback del botón
const btn = document.getElementById('buy-action');
btn.addEventListener('click', () => {
    btn.innerHTML = "Excelente elección";
    btn.style.background = "#2d3436";
    btn.style.color = "#fff";
});
