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

// Agrega un producto al carrito
function agregarAlCarrito(nombre, precio, imagenUrl) {
    const producto = {
        nombre: nombre,
        precio: parseFloat(precio),
        imagen: imagenUrl,
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

// Modifica la cantidad de un artículo mediante los botones + y -
function cambiarCantidad(nombre, cambio) {
    const producto = carrito.find(item => item.nombre === nombre);
    
    if (producto) {
        producto.cantidad += cambio;
        
        // Si la cantidad llega a 0 o menos, eliminamos el producto por completo
        if (producto.cantidad <= 0) {
            eliminarProducto(nombre);
            return;
        }
    }
    actualizarInterfazCarrito();
}

// Elimina directamente un artículo de la lista
function eliminarProducto(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    actualizarInterfazCarrito();
}

// Dibuja la lista actualizada con selectores de cantidad y precio dinámico
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
        
        // Estructura visual ordenada con botones responsivos para sumar y restar
        itemDiv.innerHTML = `
            <div style="display: flex; gap: 15px; align-items: center; width: 100%; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                <img src="${item.imagen}" style="width: 55px; height: 55px; object-fit: cover; border-radius: 8px; border: 1px solid #f0f0f0;">
                
                <div style="flex-grow: 1; display: flex; flex-direction: column; gap: 4px;">
                    <h4 style="margin: 0; font-size: 14px; color: #333; font-weight: 600; line-height: 1.3;">${item.nombre}</h4>
                    
                    <div style="display: flex; align-items: center; gap: 8px; margin-top: 2px;">
                        <button onclick="cambiarCantidad('${item.nombre}', -1)" style="background: #f5f5f5; border: none; width: 26px; height: 26px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 14px; display: flex; align-items: center; justify-content: center; color: #555; transition: background 0.2s;">-</button>
                        <span style="font-weight: bold; font-size: 14px; min-width: 20px; text-align: center; color: #333;">${item.cantidad}</span>
                        <button onclick="cambiarCantidad('${item.nombre}', 1)" style="background: #f5f5f5; border: none; width: 26px; height: 26px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 14px; display: flex; align-items: center; justify-content: center; color: #555; transition: background 0.2s;">+</button>
                    </div>
                </div>
                
                <div style="text-align: right; font-weight: bold; color: #333; font-size: 14px; min-width: 75px;">
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
            </div>
        `;
        contenedorItems.appendChild(itemDiv);
    });

    contenedorTotal.innerText = `$${totalAcumulado.toFixed(2)} USD`;
}

// Envía el resumen exacto con las cantidades finales y las imágenes a WhatsApp
function enviarPedidoWhatsApp() {
    if (carrito.length === 0) return;

    let telefono = "525638166816"; 
    let mensaje = "¡Hola! Me interesa encargar las siguientes piezas desde el catálogo:\n\n";
    let total = 0;
    
    carrito.forEach(item => {
        let subtotal = item.precio * item.cantidad;
        total += subtotal;
        
        mensaje += `🛍️ *${item.cantidad}x ${item.nombre}* - $${subtotal.toFixed(2)} USD\n`;
        
        // Obtiene la ruta limpia del servidor de GitHub Pages para evitar errores 404
        let urlLimpia = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1);
        mensaje += `🖼️ Ver Foto: ${urlLimpia}${item.imagen}\n\n`;
    });
    
    mensaje += `💰 *Total estimado:* $${total.toFixed(2)} USD\n\n`;
    mensaje += "Por favor, confírmame la disponibilidad para agendar mi pedido. 😊";

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}