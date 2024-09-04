// Função para enviar a mensagem do usuário e obter a resposta da API
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    // Exibe a mensagem do usuário na tela
    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Limpa o campo de entrada de texto após o envio
    document.getElementById('user-input').value = '';

    // Rola a caixa de chat para baixo para mostrar a nova mensagem
    chatBox.scrollTop = chatBox.scrollHeight;

    // Envia a mensagem do usuário para o servidor (API do backend)
    fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput }) // Converte a mensagem para JSON
    })
    .then(response => response.json()) // Converte a resposta do servidor para JSON
    .then(data => {
        // Exibe a resposta do bot na tela
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = data.response;
        chatBox.appendChild(botMessage);

        // Rola a caixa de chat para baixo para mostrar a resposta do bot
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Evento para enviar a mensagem quando o botão é clicado
document.getElementById('send-button').addEventListener('click', sendMessage);

// Também permite enviar a mensagem pressionando a tecla Enter
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
