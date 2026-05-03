document.getElementById('btnWhatsapp').addEventListener('click', function() {
    // 1. Obtener valores
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;
    const telefono = "525535652131"; 

    // 2. Validación
    if (nombre.trim() === "" || mensaje.trim() === "") {
        alert("Por favor, completa tu nombre y el mensaje antes de enviar.");
        return;
    }

    // 3. Formatear mensaje para WhatsApp
    // %0A es un salto de línea en la URL
    const texto = `Hola Florería Alberto, mi nombre es *${nombre}*.%0A` +
                  `*Correo:* ${correo}%0A` +
                  `*Mensaje:* ${mensaje}`;

    // 4. Construir URL correcta y abrir
    const url = `https://wa.me{telefono}?text=${texto}`;
    
    window.open(url, '_blank');
});
