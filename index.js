// Importação dos módulos necessários
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

// Configuração para carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Inicialização do app Express
const app = express();
const port = 3000;

// Configuração do middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Configuração do middleware para interpretar requisições JSON
app.use(express.json());

// Rota para lidar com as requisições de chat do usuário
app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;

    // Simulação de resposta do chatbot (sem API)
    const botResponse = `Você disse: ${userMessage}. Isso é uma simulação.`;

    // Retorna a resposta simulada como JSON
    res.json({ response: botResponse });
});

// Inicializa o servidor na porta especificada
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});