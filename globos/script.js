function verDetalle(nombreProducto) {
    alert("Pronto verás más detalles de: " + nombreProducto + ". \nEsta función se puede conectar a un carrito de compras.");
}

// Opcional: Efecto de scroll para el header
window.onscroll = function() {
    let header = document.querySelector("header");
    if (window.pageYOffset > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
};
