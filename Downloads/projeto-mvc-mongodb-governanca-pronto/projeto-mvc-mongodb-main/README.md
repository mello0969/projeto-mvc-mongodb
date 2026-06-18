# 🎓 Sistema de Cadastro de Alunos

![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen)
![Express](https://img.shields.io/badge/Express-4.x-blue)

API MVC desenvolvida com Node.js, Express e MongoDB para gerenciamento de alunos.

O projeto permite cadastrar, listar, editar e excluir registros de alunos utilizando uma arquitetura organizada em camadas (Model, View e Controller). Além disso, utiliza documentação JSDoc para facilitar a manutenção e o entendimento do código.

---

## 🚀 Stack Tecnológica

- Node.js
- Express
- MongoDB
- Mongoose
- EJS
- Nodemon

---

## ⚙️ Guia de Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/mello0969/projeto-mvc-mongodb.git
```

### 2. Acesse a pasta do projeto

```bash
cd projeto-mvc-mongodb
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/escola_mvc
NODE_ENV=development
```

---

## 📁 Estrutura do Projeto

```text
projeto-mvc-mongodb
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── views
│   └── server.js
├── README.md
├── package.json
├── .env
└── .env.example
```

---

## 📚 Documentação

Este projeto utiliza **JSDoc** para documentar Controllers e Models, permitindo que o VS Code forneça IntelliSense com informações sobre parâmetros, retornos e responsabilidades dos métodos.

---

## 👨‍💻 Autor

Desenvolvido por **Murilo Mello** como atividade prática da disciplina de Desenvolvimento Web.