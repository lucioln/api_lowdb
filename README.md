# Cursos API

Este projeto é uma API simples para gerenciar cursos. Utiliza o **Express** para as rotas, **Lowdb** como banco de dados de arquivos, e **Multer** para upload de arquivos. As configurações do ambiente são gerenciadas através de variáveis de ambiente utilizando **dotenv**.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Rotas](#rotas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [Lowdb](https://github.com/typicode/lowdb)
- [Multer](https://github.com/expressjs/multer)
- [dotenv](https://github.com/motdotla/dotenv)
- [shortid](https://www.npmjs.com/package/shortid)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/cursos-api.git

2.Navegue até o diretório do projeto:

  ```bash
  cd cursos-api
  Instale as dependências:
  ```

  ```bash
  npm install
  ```

Crie o arquivo .env na raiz do projeto, exempo:

 
  ```bash
  PORT=4000
  UPLOAD_DIR=uploads
  DB_FILE=db.json
  ```

Inicie o servidor:
  
  ```bash
  npm start
  ```

## Configuração

Este projeto utiliza o arquivo .env para gerenciar as configurações. As seguintes variáveis podem ser configuradas no arquivo .env:

PORT: A porta na qual o servidor será executado (padrão: 3000).
UPLOAD_DIR: O diretório onde os arquivos enviados serão salvos (padrão: uploads).
DB_FILE: O nome do arquivo do banco de dados Lowdb (padrão: db.json).

## Rotas

GET /cursos
Retorna todos os cursos cadastrados.

GET /cursos/:id
Retorna um curso específico por ID.

POST /cursos
Cria um novo curso. É possível enviar um arquivo usando multipart/form-data.

PUT /cursos/:id
Atualiza as informações de um curso existente por ID.

DELETE /cursos/:id
Por enquanto, retorna uma mensagem genérica sobre exclusão.

## Estrutura do Projeto
  
  ```bash
  /project-root
  │
  ├── /uploads       # Pasta para os uploads
  ├── /db            # Configurações de banco de dados
  │   └── db.js
  ├── /config        # Configurações do multer
  │   └── multerConfig.js
  ├── /routes        # Rotas
  │   └── cursos.js
  └── app.js         # Arquivo principal
  ```

## Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença
Este projeto está licenciado sob a MIT License.
