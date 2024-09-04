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
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        // Fazendo a chamada para a API da OpenAI
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo', // Use 'gpt-4' se tiver acesso
            messages: [{ role: 'user', content: userMessage }]
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        // Extrai a resposta do bot da API
        const botResponse = response.data.choices[0].message.content;
        res.json({ response: botResponse });

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(500).send('Something went wrong!');
    }
});

// Inicializa o servidor na porta especificada
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
