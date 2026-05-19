# Backend Users API

API REST simples para cadastro de usuarios, criada com Node.js, Express, Prisma e MongoDB.

O projeto implementa um CRUD de usuarios, permitindo listar, criar, atualizar e deletar registros no banco de dados.

## Tecnologias

- Node.js
- Express
- Prisma ORM
- MongoDB
- dotenv

## Requisitos

Antes de iniciar, tenha instalado:

- Node.js
- npm
- Uma URL de conexao com MongoDB

## Instalacao

Clone ou acesse a pasta do projeto e instale as dependencias:

```bash
npm install
```

## Configuracao do ambiente

Crie um arquivo `.env` na raiz do projeto com a variavel `DATABASE_URL`:

```env
DATABASE_URL="sua_url_do_mongodb"
```

Exemplo:

```env
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/nome-do-banco"
```

## Configuracao do Prisma

O schema do Prisma esta em:

```text
prisma/schema.prisma
```

Modelo usado pelo projeto:

```prisma
model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  name  String?
  email String @unique
  age   Int
}
```

Depois de configurar o `.env`, gere o Prisma Client:

```bash
npx prisma generate
```

## Executando o projeto

Para iniciar o servidor em modo desenvolvimento:

```bash
npm run dev
```

O servidor sera iniciado em:

```text
http://localhost:3000
```

## Rotas da API

### Listar usuarios

```http
GET /usuarios
```

Retorna todos os usuarios cadastrados.

Exemplo de URL:

```text
http://localhost:3000/usuarios
```

### Criar usuario

```http
POST /usuarios
```

Cria um novo usuario.

Body JSON:

```json
{
  "name": "Joao",
  "email": "joao@email.com",
  "age": 30
}
```

Resposta esperada:

```json
{
  "message": "Usuario criado com sucesso!"
}
```

### Atualizar usuario

```http
PUT /usuarios/:id
```

Atualiza um usuario pelo `id`.

Exemplo de URL:

```text
http://localhost:3000/usuarios/ID_DO_USUARIO
```

Body JSON:

```json
{
  "name": "Joao Silva",
  "email": "joao.silva@email.com",
  "age": 31
}
```

Resposta esperada:

```json
{
  "message": "Usuario atualizado com sucesso!"
}
```

### Deletar usuario

```http
DELETE /usuarios/:id
```

Remove um usuario pelo `id`.

Exemplo de URL:

```text
http://localhost:3000/usuarios/ID_DO_USUARIO
```

Resposta esperada:

```json
{
  "message": "Usuario deletado com sucesso!"
}
```

## Estrutura do projeto

```text
backend-users-api/
+-- prisma/
|   +-- schema.prisma
+-- server.js
+-- package.json
+-- package-lock.json
+-- .env
+-- .gitignore
+-- README.md
```

## Observacoes

- As rotas `POST`, `PUT` e `DELETE` devem ser testadas com ferramentas como Postman, Insomnia ou Thunder Client.
- O campo `email` deve ser unico para cada usuario.
- A porta usada pelo servidor e `3000`.
