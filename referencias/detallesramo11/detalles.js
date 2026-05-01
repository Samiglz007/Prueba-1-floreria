// Efecto de inclinación inteligente (Smart Tilt)
const stage = document.querySelector('.visual-stage');
const orb = document.querySelector('.image-orb');

document.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 45;
    let y = (window.innerHeight / 2 - e.pageY) / 45;
    
    orb.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    
    // El título también se mueve levemente
    document.querySelector('.grand-title').style.transform = `translateX(${x * 0.5}px)`;
});

// Animación de compra
const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    this.style.width = '100px';
    this.innerHTML = '...';
    
    setTimeout(() => {
        this.innerHTML = 'RESERVADO';
        this.style.width = '100%';
        this.style.background = '#c5a367';
        this.style.color = '#000';
    }, 1500);
});
