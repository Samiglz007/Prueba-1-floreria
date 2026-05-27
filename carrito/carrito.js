let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
    const carritoSidebar = document.getElementById("carrito-sidebar");
    const cerrarCarritoBtn = document.getElementById("btn-cerrar-carrito");
    const botonWhatsApp = document.getElementById("btn-enviar-wa");

    if (cerrarCarritoBtn) {
        cerrarCarritoBtn.addEventListener("click", () => {
            carritoSidebar.classList.remove("activo");
        });
    }

    if (botonWhatsApp) {
        botonWhatsApp.addEventListener("click", (e) => {
            e.preventDefault();
            enviarPedidoWhatsApp();
        });
    }
});

// Función para registrar productos en la lista junto con su imagen
function agregarAlCarrito(nombre, precio, imagenUrl) {
    const producto = {
        nombre: nombre,
        precio: parseFloat(precio),
        imagen: imagenUrl, // Guardamos la ruta de la foto
        cantidad: 1
    };

    const existente = carrito.find(item => item.nombre === producto.nombre);
    
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push(producto);
    }

    actualizarInterfazCarrito();
    document.getElementById("carrito-sidebar").classList.add("activo");
}

function actualizarInterfazCarrito() {
    const contenedorItems = document.getElementById("carrito-items");
    const contenedorTotal = document.getElementById("carrito-total-precio");
    
    contenedorItems.innerHTML = "";
    let totalAcumulado = 0;

    if (carrito.length === 0) {
        contenedorItems.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
        contenedorTotal.innerText = "$0.00 USD";
        return;
    }

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        totalAcumulado += subtotal;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item-carrito");
        
        // Muestra la miniatura de la foto dentro del carrito flotante
        itemDiv.innerHTML = `
            <div style="display: flex; gap: 10px; align-items: center;">
                <img src="${item.imagen}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                <div class="item-detalles">
                    <h4>${item.nombre} (x${item.cantidad})</h4>
                </div>
            </div>
            <div class="item-precio-lado">
                <span>$${subtotal.toFixed(2)}</span>
            </div>
        `;
        contenedorItems.appendChild(itemDiv);
    });

    contenedorTotal.innerText = `$${totalAcumulado.toFixed(2)} USD`;
}

// Genera la URL dinámica corregida para evitar el error 404 en GitHub Pages
function enviarPedidoWhatsApp() {
    if (carrito.length === 0) return;

    let telefono = "525638166816"; 
    let mensaje = "¡Hola! Me interesa encargar las siguientes piezas desde el catálogo:\n\n";
    let total = 0;
    
    carrito.forEach(item => {
        let subtotal = item.precio * item.cantidad;
        total += subtotal;
        
        mensaje += `🛍️ *${item.cantidad}x ${item.nombre}* - $${subtotal.toFixed(2)} USD\n`;
        
        // SOLUCIÓN AL 404: Obtiene la ruta de la carpeta actual (ej: https://samiglz007.github.io/referencias/detallesramo1/)
        let urlLimpia = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1);
        
        mensaje += `🖼️ Ver Foto: ${urlLimpia}${item.imagen}\n\n`;
    });
    
    mensaje += `💰 *Total estimado:* $${total.toFixed(2)} USD\n\n`;
    mensaje += "Por favor, confírmame la disponibilidad para agendar mi pedido. 😊";

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}