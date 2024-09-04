// Função para simular o diálogo formal baseado nas mensagens do usuário
function simulateFormalConversation(userMessage) {
    let botResponse = "";

    switch (userMessage.toLowerCase()) {
        case "bom dia":
            botResponse = "Bom dia! Espero que esteja bem. Como posso ajudá-lo(a) hoje?";
            break;
        case "meu nome é":
            botResponse = "Prazer em conhecê-lo(a)! Como posso ajudá-lo(a) neste momento?";
            break;
        case "gostaria de agendar uma reunião":
            botResponse = "Claro, ficarei feliz em agendar uma reunião. Qual seria um bom horário para você?";
            break;
        case "obrigado pelo seu tempo":
            botResponse = "Eu que agradeço! Foi um prazer conversar com você. Tenha um ótimo dia!";
            break;
        case "preciso de mais tempo":
            botResponse = "Compreendo. Tome o tempo necessário para analisar a questão. Estou à disposição.";
            break;
        case "posso fornecer um feedback":
            botResponse = "Sua opinião é muito valiosa. Por favor, compartilhe seu feedback.";
            break;
        default:
            botResponse = "Obrigado por sua mensagem. Estou aqui para ajudar no que for necessário.";
            break;
    }

    return botResponse;
}

// Função para enviar a mensagem do usuário e obter a resposta simulada
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

    // Simula a resposta do bot
    const botResponse = simulateFormalConversation(userInput);

    // Exibe a resposta do bot na tela
    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.textContent = botResponse;
    chatBox.appendChild(botMessage);

    // Rola a caixa de chat para baixo para mostrar a resposta do bot
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Evento para enviar a mensagem quando o botão é clicado
document.getElementById('send-button').addEventListener('click', sendMessage);

// Também permite enviar a mensagem pressionando a tecla Enter
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
