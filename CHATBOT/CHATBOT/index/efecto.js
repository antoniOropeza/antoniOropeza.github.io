function sendInitialMessages() {
    var chatbox = document.getElementById("chatbox");
    var messages = document.querySelectorAll(".message");

    messages.forEach(function(message) {
        chatbox.appendChild(message);
        message.classList.add("visible");
    });

    // Desplazarse hasta el final del chat
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Función para mostrar mensajes con animación
function showMessage(messageId) {
    var message = document.getElementById(messageId);
    message.classList.add("visible");
}

// Llamada a la función cuando se carga la página
window.onload = function() {
    sendInitialMessages();
};