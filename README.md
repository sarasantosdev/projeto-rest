# Projeto API RESTFull

Este projeto implementa uma API RESTFull de usuários em Node.js/Express, agora integrada ao banco de dados PostgreSQL utilizando o Prisma ORM.

Inicialmente, os dados eram mantidos em memória (array local), depois foram persistidos diretamente no PostgreSQL via pg, e finalmente evoluímos para uma camada ORM com Prisma, tornando o acesso ao banco mais seguro, organizado e produtivo.

Cada usuário possui os campos id e nome, e as operações CRUD (GET, POST, PUT, DELETE) continuam funcionando da mesma forma — agora refletindo diretamente no banco via Prisma Client.

## Tecnologias e execução

- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework para criação do servidor
- **PostgreSQL**: Banco de dados relacional
- **pg(node-postgres)**: Drive para conecar o Node.js ao PostegreSQL
- **Prisma ORM – mapeamento objeto-relacional**: Manipular o banco de forma mais intuitiva
- **dotenv**: Leitura de variáveis de ambiente (.env)

## Instalação e execução

1. Instale as dependências
```
npm install
```
2. Configure o arquivo `.env`
Crie um arquivo `.env`na raiz do projeto com as credencias do seu banco
```
PGHOST=localhost
PGUSER=postgres
PGPASSWORD=sua_senha
PGDATABASE=api_users
PGPORT=5432
PORT=3000

DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/api_users"
```

3. Inicialize o Prisma
```
npx prisma init
```
4. Caso o banco de dados já exista, traga o para o Prisma
```
npx prisma db pull
```
5. Gere o Prisma Client
```
npx prisma generate
```
6. Inicie o servidor
```
node server.js
```
7. O servidor ficará disponível em
```
http://localhost:3000
```
## Testando a API
Os endpoints foram testados no Postman.
Requisições `GET`, `POST`, `PUT`e `DELETE` atualizam os dados no banco em tempo real.

### Exemplos
* **Listar todos os usuários (GET)**
```
http://localhost:3000/users
```
* **Buscar usuário pelo id (GET)**
```
http://localhost:3000/users/1
```
* **Criar novo usuário (POST)**
```
http://localhost:3000/users
```
* **Atualizar usuário (PUT)**
```
http://localhost:3000/users/1
```
* **Remover usuário (DELETE)**
```
http://localhost:3000/users/1
```
### Documentação da API (Postman): 
https://documenter.getpostman.com/view/49506608/2sB3WjxiGv

## Conceitos aprendidos

Durante o desenvolvimento, aprendi que uma API (Application Programming Interface) é um conjunto de regras que permite a comunicação entre sistemas.
Essa comunicação acontece por meio de requisições HTTP, utilizando formatos padronizados como JSON.

📡 Métodos HTTP
- GET: leitura de dados
- POST: criação
- PUT: atualização
- DELETE: exclusão

As funções de controle (controllers) implementam a lógica de cada ação e são conectadas às rotas (endpoints), que representam o caminho entre o cliente e o servidor.

Além disso, compreendi que:

- O Prisma ORM abstrai as consultas SQL, transformando-as em código JavaScript/TypeScript mais intuitivo.

- Ele gera automaticamente o Prisma Client, responsável por manipular os dados da aplicação com segurança e tipagem forte.

- As migrações e introspecções permitem sincronizar o modelo da aplicação com o banco real, garantindo consistência entre código e dados.

## Autora:

[![GitHub Badge](https://img.shields.io/badge/-Sara%20Santos-000?style=flat&logo=GitHub&logoColor=white)](https://github.com/sarasantosdev)
