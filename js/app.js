// whatsapp-form.js
console.log("WhatsApp Form Script conectado");

// Función para manejar el envío del formulario
function manejarFormularioTurno() {
    document
        .getElementById("formularioTurno")
        .addEventListener("submit", function (e) {
            e.preventDefault(); // Prevenir el envío normal del formulario

            // Obtener los valores del formulario
            const nombre = document.getElementById("nombres").value;
            const apellido = document.getElementById("apellido").value;
            const correo = document.getElementById("correo").value;
            const telefono = document.getElementById("telefono").value;
            const mensaje = document.getElementById("mensaje").value;

            // Validar que los campos requeridos estén llenos
            if (!nombre || !apellido || !correo || !telefono) {
                alert("Por favor, complete todos los campos obligatorios.");
                return;
            }

            // Crear el mensaje para WhatsApp
            let mensajeWhatsApp = `🏥 *SOLICITUD DE TURNO - BIOMAGNETISMO*%0A%0A`;
            mensajeWhatsApp += `👤 *Nombre:* ${nombre}%0A`;
            mensajeWhatsApp += `👤 *Apellido:* ${apellido}%0A`;
            mensajeWhatsApp += `📧 *Email:* ${correo}%0A`;
            mensajeWhatsApp += `📱 *Teléfono:* ${telefono}%0A`;

            if (mensaje) {
                mensajeWhatsApp += `💬 *Mensaje adicional:* ${mensaje}%0A`;
            }

            mensajeWhatsApp += `%0A📅 *Solicito turno para terapia de biomagnetismo*%0A`;
            mensajeWhatsApp += `%0A¡Gracias por contactarnos!`;

            // Crear la URL de WhatsApp
            const numeroWhatsApp = "5493827400933"; // Tu número con código de país (Argentina +54)
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;

            // Abrir WhatsApp
            window.open(urlWhatsApp, "_blank");

            // Opcional: limpiar el formulario después del envío
            document.getElementById("formularioTurno").reset();

            // Mostrar mensaje de confirmación
            alert(
                "¡Perfecto! Se abrirá WhatsApp con tu solicitud de turno. Por favor, envía el mensaje para completar tu solicitud."
            );
        });
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    manejarFormularioTurno();
});
