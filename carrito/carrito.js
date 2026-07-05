let carrito = [];

// URL base de tu GitHub Pages
const GITHUB_BASE = "https://samiglz007.github.io/Prueba-1-floreria/";

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

// Convierte la imagen local en URL pública de GitHub Pages
function construirURLImagen(imagenUrl) {
    // Si ya viene completa, la dejamos igual
    if (imagenUrl.startsWith("http://") || imagenUrl.startsWith("https://")) {
        return imagenUrl;
    }

    // Retorna la URL limpia uniendo la base de GitHub con la ruta del botón
    return GITHUB_BASE + imagenUrl;
}


// Agrega un producto al carrito
function agregarAlCarrito(nombre, precio, imagenUrl) {
    const producto = {
        nombre: nombre,
        precio: parseFloat(precio), // se conserva aunque ya no se muestre
        imagen: construirURLImagen(imagenUrl), // guardamos la URL completa correcta
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

// Modifica la cantidad
function cambiarCantidad(nombre, cambio) {
    const producto = carrito.find(item => item.nombre === nombre);
    
    if (producto) {
        producto.cantidad += cambio;

        if (producto.cantidad <= 0) {
            eliminarProducto(nombre);
            return;
        }
    }

    actualizarInterfazCarrito();
}

// Elimina un producto
function eliminarProducto(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    actualizarInterfazCarrito();
}

// Dibuja el carrito sin precios
function actualizarInterfazCarrito() {
    const contenedorItems = document.getElementById("carrito-items");
    const contenedorTotal = document.getElementById("carrito-total-precio");

    contenedorItems.innerHTML = "";

    if (carrito.length === 0) {
        contenedorItems.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';

        if (contenedorTotal) {
            contenedorTotal.innerText = "";
        }
        return;
    }

    carrito.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item-carrito");

        itemDiv.innerHTML = `
            <div style="display: flex; gap: 15px; align-items: center; width: 100%; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                <img src="${item.imagen}" style="width: 55px; height: 55px; object-fit: cover; border-radius: 8px; border: 1px solid #f0f0f0;">
                
                <div style="flex-grow: 1; display: flex; flex-direction: column; gap: 4px;">
                    <h4 style="margin: 0; font-size: 14px; color: #333; font-weight: 600; line-height: 1.3;">${item.nombre}</h4>
                    
                    <div style="display: flex; align-items: center; gap: 8px; margin-top: 2px;">
                        <button onclick="cambiarCantidad('${item.nombre}', -1)" style="background: #f5f5f5; border: none; width: 26px; height: 26px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 14px; display: flex; align-items: center; justify-content: center; color: #555;">-</button>
                        <span style="font-weight: bold; font-size: 14px; min-width: 20px; text-align: center; color: #333;">${item.cantidad}</span>
                        <button onclick="cambiarCantidad('${item.nombre}', 1)" style="background: #f5f5f5; border: none; width: 26px; height: 26px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 14px; display: flex; align-items: center; justify-content: center; color: #555;">+</button>
                    </div>
                </div>
            </div>
        `;
        contenedorItems.appendChild(itemDiv);
    });

    if (contenedorTotal) {
        contenedorTotal.innerText = "";
    }
}

// Envía el pedido a WhatsApp sin precios
function enviarPedidoWhatsApp() {
    if (carrito.length === 0) return;

    let telefono = "525638166816";
    let mensaje = "¡Hola! Me interesa encargar las siguientes piezas desde el catálogo:\n\n";

    carrito.forEach(item => {
        mensaje += `🛍️ *${item.cantidad}x ${item.nombre}*\n`;
        mensaje += `🖼️ Ver Foto: ${item.imagen}\n\n`;
    });

    mensaje += "Por favor, confírmame disponibilidad, precio actualizado y opciones de personalización. 😊";

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}