const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Cargar tema guardado
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});
