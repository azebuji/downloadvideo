# 🎥 Script de Download de Episódios com Puppeteer

Este script automatiza o download dos episódios do anime **School Rumble Ni Gakki** usando o **Puppeteer**, acessando as URLs dos vídeos, extraindo os links diretos e simulando cliques para iniciar os downloads automaticamente.

## 🚀 Funcionalidades
- 📡 **Acessa URLs dos episódios** diretamente.
- 🎬 **Detecta e extrai a URL do vídeo** da página.
- 📥 **Simula um clique para baixar** cada episódio.
- ⏳ **Adiciona um intervalo entre os downloads** para evitar sobrecarga.

## 🛠️ Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Puppeteer](https://pptr.dev/)

## 📜 Como Usar

### 1️⃣ Instale as dependências
Certifique-se de ter o **Node.js** instalado. Depois, instale o Puppeteer:
```sh
npm i ou yarn
```

### 2️⃣ Execute o script
Salve o código em um arquivo **`download.js`** e execute:
```sh
node index.js
```

O script acessará cada episódio, extrairá a URL do vídeo e iniciará o download automaticamente.

## ❗ Observações
- 🛑 O script **simula o clique de download**, mas alguns navegadores podem bloquear downloads automáticos.
- 🔄 Se precisar baixar mais episódios, altere o **intervalo da iteração** (`for` loop).
- ⏳ O tempo de pausa (`30s`) pode ser ajustado conforme a velocidade da conexão.

## 🤝 Contribuição
Sinta-se à vontade para melhorar o script ou sugerir mudanças!

---
Feito com ❤️ por Anderson Richard De Souza + Chatgpt

