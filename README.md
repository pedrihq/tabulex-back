# 🧮 Tabulex - Back-End

Este é o **back-end** do projeto Tabulex, responsável por fornecer a API que o front-end consome para exibir e manipular os dados.

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (via cluster no MongoDB Atlas)
- [Multer](https://github.com/expressjs/multer) (upload de arquivos)
- [Cors](https://github.com/expressjs/cors)
- [Dotenv](https://github.com/motdotla/dotenv)

---

## 📋 Pré-requisitos

- Ter uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para criar um cluster
- Ter o [Node.js](https://nodejs.org/) instalado

---

## ⚙️ Configuração do projeto

### 1. Clone o repositório

```bash
git clone https://github.com/pedrihq/tabulex-back.git
cd tabulex-back
npm install
STRING_CONEXAO='sua-string-de-conexao-mongodb-aqui'
PORT=8000
npm run dev
````
🔗 Integração com o Front-End
Este back-end foi desenvolvido para funcionar com o front-end do Tabulex.
No front-end, configure a URL base da API para http://localhost:8000 (ou onde o back estiver rodando).


