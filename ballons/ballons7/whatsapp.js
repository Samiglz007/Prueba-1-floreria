document.addEventListener("DOMContentLoaded", () => {
    const btnWhatsapp = document.getElementById("btn-whatsapp");

    if (!btnWhatsapp) return;

    btnWhatsapp.addEventListener("click", function (e) {
        e.preventDefault();

        // Número de WhatsApp en formato internacional
        const telefono = "525638166816";

        // Obtener nombre del producto
        const tituloProducto = document.getElementById("titulo-producto");
        const nombreProducto = tituloProducto
            ? tituloProducto.textContent.trim()
            : "Producto sin nombre";

        // URL fija del producto
           let urlFoto = "https://samiglz007.github.io/Prueba-1-floreria/ballons/ballons7/dglobo.jpeg";

        // MENSAJE CON SÍMBOLOS SEGUROS
        const mensaje = `• Hola, me interesa pedir este producto de su catálogo 

▸ Producto: ${nombreProducto}
▸ Foto del producto: ${urlFoto}

✦ ¿Me podrían dar información sobre disponibilidad, precio y personalización? :)`;

        // Abrir WhatsApp
        const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsapp, "_blank");
    });
});