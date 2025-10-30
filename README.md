# Projeto API RESTFull

Este projeto implementa uma **API RESTfull de usuários em Node.js/Express**, agora integrada a um **banco de dados PostgreSQL.**

Inicialmente, os dados eram mantidos em memória (array local), mas a API foi evoluída para persistir as informações em um banco real, garantindo durabilidade e escalabilidade.

Cada usuário possui os campos `id` e `nome`, e as operações CRUD (`GET`, `POST`, `PUT`, `DELETE`) continuam funcionando da mesma forma — agora refletindo diretamente no banco.

## Tecnologias e execução

- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework para criação do servidor
- **PostgreSQL**: Banco de dados relacional
- **pg(node-postgres)**: Drive para conecar o Node.js ao PostegreSQL
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
```
3. Inicie o servidor
```
node server.js
```
4. O servidor ficará disponível em
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

Aprendi que uma **API (Application Programming Interface)** é um **conjunto de regras e padrões que permite a comunicação entre dois sistemas**. Para que essa comunicação seja eficiente, ambos os lados (cliente e servidor) utilizam um **formato padrão de dados**, geralmente o **JSON (JavaScript Object Notation)**, por ser leve, fácil de ler e amplamente suportado.

O acesso e a manipulação dos dados ocorrem por meio dos **métodos HTTP**, como `GET`, `POST`, `PUT` e `DELETE`.  
Cada um deles representa uma ação diferente sobre os recursos da API:
* `GET`: leitura de dados
* `POST`: criação
* `PUT` : atualização
* `DELETE`: exclusão

Aprendi a **persistir os dados no banco de dados** permitindo que os dados permaneçam mesmo após reiniciar o servidor.

Entretanto, apenas definir esses métodos não é suficiente: é necessário ter uma **lógica por trás de cada ação**.  
Essa lógica fica na **camada de controller**, que contém as funções responsáveis por manipular os dados de acordo com a requisição recebida.  
Após a criação dos controllers, eles são **conectados às rotas (endpoints)**, que representam o caminho entre o cliente e o servidor, indicando qual recurso está sendo solicitado.

Também aprendi que, ao realizar uma requisição, há dois componentes principais:
- **Cabeçalho HTTP (header)** – contém informações (metadados) sobre a requisição ou resposta, como tipo de conteúdo (`Content-Type`), status (`200 OK`, `404 Not Found`), e permissões de acesso.
- **Corpo (body)** – é o conteúdo principal enviado ou recebido, como os dados em formato JSON.

Esses elementos permitem que **cliente e servidor compreendam o que está sendo enviado e recebido**, garantindo uma comunicação padronizada e eficiente.

## Autora:

[![GitHub Badge](https://img.shields.io/badge/-Sara%20Santos-000?style=flat&logo=GitHub&logoColor=white)](https://github.com/sarasantosdev)
