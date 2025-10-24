# Projeto API RESTFull

Este projeto implementa uma **API de usuários** simples em Node.js/Express. Cada usuário tem os campos `id` e `nome`. Os dados são mantidos **in-memory**, ou seja, armazenados localmente em um array de objetos no arquivo `data/users.js` (não há persistência entre reinícios do servidor).

A API expõe endopoints REST para **manipulação dos dados** (métodos HTTP: `GET`, `POST`, `PUT`, `PATCH` e `DELETE`) e inclui a lógica de rotas e controladores necessários para a criação, leitura, atualização e remoção de usuários.

## 🚀 Tecnologias e execução

Todo o projeto foi desenvolvido utilizando o **framework Express**, que facilita a criação de servidores e o gerenciamento de rotas no **Node.js**.  
Com ele foi possível **criar e iniciar o servidor**, além de **definir os endpoints** responsáveis pelas operações da API.

## 🔧 Instalação e execução

1. Instale as dependências
```
npm install
```
2. Inicie o servidor
```
node server.js
```
3. O servidor ficará em
```
http://localhost:3000
```
## 🧩 Testando a API
Os endpoints foram testados utilizando o Postman, com ele pude verificar todas as requisições, principalmente aquelas que alteram os dados: `POST`, `PUT`, `PATCH`, `DELETE`. Pelo navegador somente é possível realizar a requisição  `GET`, ou seja, somente é possível fazer a leitura dos dados.

### Exemplos
* Listar todos os usuários
```
👉🏽 http://localhost:3000/users
```
* Buscar usuário pelo id
```
👉🏽 http://localhost:3000/users/1
```
### 🔗 Documentação da API (Postman): 
https://documenter.getpostman.com/view/49506608/2sB3WjxiGv

## 🧠 Conceitos aprendidos

Aprendi que uma **API (Application Programming Interface)** é um **conjunto de regras e padrões que permite a comunicação entre dois sistemas**. Para que essa comunicação seja eficiente, ambos os lados (cliente e servidor) utilizam um **formato padrão de dados**, geralmente o **JSON (JavaScript Object Notation)**, por ser leve, fácil de ler e amplamente suportado.

O acesso e a manipulação dos dados ocorrem por meio dos **métodos HTTP**, como `GET`, `POST`, `PUT`, `PATCH` e `DELETE`.  
Cada um deles representa uma ação diferente sobre os recursos da API:
* `GET`: leitura de dados
* `POST`: criação
* `PUT` e `PATCH`: atualização
* `DELETE`: exclusão

Entretanto, apenas definir esses métodos não é suficiente: é necessário ter uma **lógica por trás de cada ação**.  
Essa lógica fica na **camada de controller**, que contém as funções responsáveis por manipular os dados de acordo com a requisição recebida.  
Após a criação dos controllers, eles são **conectados às rotas (endpoints)**, que representam o caminho entre o cliente e o servidor, indicando qual recurso está sendo solicitado.

Também aprendi que, ao realizar uma requisição, há dois componentes principais:
- **Cabeçalho HTTP (header)** – contém informações (metadados) sobre a requisição ou resposta, como tipo de conteúdo (`Content-Type`), status (`200 OK`, `404 Not Found`), e permissões de acesso.
- **Corpo (body)** – é o conteúdo principal enviado ou recebido, como os dados em formato JSON.

Esses elementos permitem que **cliente e servidor compreendam o que está sendo enviado e recebido**, garantindo uma comunicação padronizada e eficiente.

## 📂 Estrutura de pastas
```bash
📦 projeto-api
├── 📁 data
│   └── users.js         # Array de usuários (dados em memória)
├── 📁 routes
│   └── userRoutes.js    # Definição das rotas
├── 📁 controllers
│   └── userController.js # Lógica de manipulação dos dados
├── .gitignore
├── package.json
├── server.js             # Arquivo principal do servidor
└── README.md
```
## 💭 Próximos passos
* Integrar a API com um banco de dados real (ex.: PostgreSQL, MongoDB).
* Configurar ambiente Docker para containerização da aplicação.
* Implementar validações e tratamento de erros.
* Adicionar testes automatizados com Jest.

## Autora:

[![GitHub Badge](https://img.shields.io/badge/-Sara%20Santos-000?style=flat&logo=GitHub&logoColor=white)](https://github.com/sarasantosdev)
