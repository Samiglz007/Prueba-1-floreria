let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
    const carritoSidebar = document.getElementById("carrito-sidebar");
    const cerrarCarritoBtn = document.getElementById("btn-cerrar-carrito");
    const botonWhatsApp = document.getElementById("btn-enviar-wa");

    // Evento para cerrar el menú lateral al presionar la 'X'
    if (cerrarCarritoBtn) {
        cerrarCarritoBtn.addEventListener("click", () => {
            carritoSidebar.classList.remove("activo");
        });
    }

    // Evento para activar la compra hacia WhatsApp
    if (botonWhatsApp) {
        botonWhatsApp.addEventListener("click", (e) => {
            e.preventDefault();
            enviarPedidoWhatsApp();
        });
    }
});

// Función para registrar productos en la lista
function agregarAlCarrito(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: parseFloat(precio),
        cantidad: 1
    };

    // Validar si la pieza ya fue añadida previamente para incrementar su contador
    const existente = carrito.find(item => item.nombre === producto.nombre);
    
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push(producto);
    }

    actualizarInterfazCarrito();
    
    // Desplegar visualmente el panel lateral
    document.getElementById("carrito-sidebar").classList.add("activo");
}

// Dibuja los artículos en la interfaz dinámicamente
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
        itemDiv.innerHTML = `
            <div class="item-detalles">
                <h4>${item.nombre} (x${item.cantidad})</h4>
            </div>
            <div class="item-precio-lado">
                <span>$${subtotal.toFixed(2)}</span>
            </div>
        `;
        contenedorItems.appendChild(itemDiv);
    });

    contenedorTotal.innerText = `$${totalAcumulado.toFixed(2)} USD`;
}

// Genera la URL dinámica encriptada para el chat
function enviarPedidoWhatsApp() {
    if (carrito.length === 0) return;

    // Número de teléfono de Florería Alberto (configurado con tu número de la cabecera)
    let telefono = "525638166816"; 
    
    let mensaje = "¡Hola! Me interesa encargar las siguientes piezas desde el catálogo:\n\n";
    let total = 0;
    
    carrito.forEach(item => {
        let subtotal = item.precio * item.cantidad;
        total += subtotal;
        mensaje += `🛍️ *${item.cantidad}x ${item.nombre}* - $${subtotal.toFixed(2)} USD\n`;
    });
    
    mensaje += `\n💰 *Total estimado:* $${total.toFixed(2)} USD\n\n`;
    mensaje += "Por favor, confírmame la disponibilidad para agendar mi pedido. 😊";

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}