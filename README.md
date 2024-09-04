Chatbot Zezinho 🤖
Bem-vindo ao Chatbot Zezinho, seu assistente virtual inteligente, alimentado pela API do OpenAI! Este projeto foi criado para facilitar a interação com um chatbot dinâmico e envolvente que pode ser executado tanto utilizando créditos da API quanto de forma gratuita. Veja como configurá-lo e explorá-lo ao máximo!

🚀 Como Executar o Chatbot Zezinho
Siga este guia simples e tenha o Chatbot Zezinho pronto para conversar em poucos passos!

1. Clone o Repositório
Antes de mais nada, traga o projeto para a sua máquina local. Basta clonar o repositório:

bash
Copiar código
git clone https://github.com/Jose6348/Chatbot_Zezinho.git
cd Chatbot_Zezinho

2. Instale as Dependências
Agora, instale as dependências que o Chatbot Zezinho precisa para funcionar perfeitamente. Com o Node.js instalado, execute:

bash
Copiar código
npm install

3. Configure a API do OpenAI
Usando Créditos da API (ChatGPT-4 ou GPT-3.5)
Para usar o Chatbot Zezinho com a API paga do OpenAI, você precisará de uma chave de API. Aqui está o que fazer:

Vá até o site da OpenAI e gere sua chave de API.

Crie um arquivo .env na raiz do projeto (ao lado de index.js), contendo a seguinte linha:

bash
Copiar código
OPENAI_API_KEY=SUA_API_KEY
Salve o arquivo e pronto! O Chatbot Zezinho agora está pronto para responder usando o poder do ChatGPT.

Executando o Chatbot com Créditos
Com tudo configurado, você está pronto para rodar o chatbot:

bash
Copiar código
node index.js
Agora, abra o navegador e vá para http://localhost:3000. A interação com o Chatbot Zezinho está pronta!

4. Usando o Chatbot Sem Créditos (Modo Gratuito)
Sem créditos da API? Não se preocupe! O Chatbot Zezinho também pode funcionar em um modo gratuito, utilizando mensagens de fallback. Siga estas instruções para habilitar o modo sem a API:

O código já tem uma função de fallback que ativa quando a API não está configurada. Nesse caso, o bot responderá com mensagens predefinidas, como:

javascript
Copiar código
const fallbackResponse = [
  "Desculpe, não consegui me conectar à API no momento.",
  "Olá! Estou offline no momento, mas posso ajudar com perguntas básicas.",
  "Estou aqui para ajudar, mesmo sem a API ativa!"
];
Para usar o modo gratuito, basta não configurar a variável OPENAI_API_KEY no arquivo .env.

Executando o Chatbot em Modo Gratuito:

Da mesma forma que o modo com créditos, execute o seguinte comando:

bash
Copiar código
node index.js
E acesse http://localhost:3000 no navegador. O Chatbot Zezinho responderá com mensagens predefinidas!

🎨 Personalize o Chatbot
Quer deixar o Chatbot Zezinho com a sua cara? Explore o diretório public/ para personalizar o layout, mudar o estilo do CSS, adicionar novos recursos e até alterar a imagem do robô.

A personalização é simples e pode deixar o chatbot ainda mais imersivo e atraente. Aqui estão algumas ideias de personalização:

Alterar o fundo e as cores para combinar com a identidade visual do seu projeto.
Adicionar novos diálogos ou opções de interação.
Mudar a imagem do robô para algo mais próximo do seu público-alvo.
