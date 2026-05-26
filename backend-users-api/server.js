/*
  Documentacao rapida do projeto

  - Este arquivo cria um servidor usando Express.
  - O projeto esta configurado para usar modulos ES, por isso usamos import.
  - Antes, o Express poderia ser importado com require:
    const express = require('express')
  - Agora, a importacao esta sendo feita com:
    import express from 'express'
  - O app.use(express.json()) permite que o servidor leia dados em JSON enviados no corpo da requisicao.
  - O PrismaClient faz a comunicacao entre o servidor e o banco de dados.
  - Este projeto possui um CRUD de usuarios:
    CREATE: cria um novo usuario.
    READ: lista os usuarios cadastrados.
    UPDATE: atualiza um usuario pelo id.
    DELETE: remove um usuario pelo id.
  - A rota GET /usuarios retorna a lista de usuarios em formato JSON.
  - A rota POST /usuarios recebe os dados enviados pelo cliente e cria um usuario no banco.
  - A rota PUT /usuarios/:id atualiza um usuario existente usando o id enviado na URL.
  - A rota DELETE /usuarios/:id deleta um usuario existente usando o id enviado na URL.
  - Diferente do GET, as rotas POST, PUT e DELETE nao costumam ser acessadas pela barra do navegador.
  - Para testar essas rotas, use ferramentas como Insomnia, Postman ou Thunder Client.
  - No POST e no PUT, envie um JSON no corpo da requisicao, por exemplo:
    {
      "name": "Joao",
      "age": 30,
      "email": "joao@email.com"
    }
  - Quando o usuario e criado, o servidor responde com status 201.
  - Quando o usuario e atualizado ou deletado, o servidor responde com status 200.
  - O servidor roda na porta 3000.

  Rotas do CRUD:

  GET http://localhost:3000/usuarios
  Lista todos os usuarios.

  POST http://localhost:3000/usuarios
  Cria um novo usuario.

  PUT http://localhost:3000/usuarios/:id
  Atualiza um usuario pelo id.

  DELETE http://localhost:3000/usuarios/:id
  Deleta um usuario pelo id.
*/

import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())



app.get('/usuarios', async (req, res) => {

  const users = await prisma.user.findMany()

  res.status(200).json(users)
})

// Rota POST: recebe uma requisicao para criar/cadastrar usuarios.
app.post('/usuarios', async (req, res) => {

  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name
    }
  })

  console.log(user)
  res.status(201).json(user)

})

// Rota PUT: recebe uma requisicao para atualizar usuarios.
app.put('/usuarios/:id', async (req, res) => {

  const user = await prisma.user.update({
    where: {
      id: req.params.id
    },
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name
    }
  })


  console.log(user)
  res.status(200).json(user)

})

app.delete('/usuarios/:id', async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id
    }
  })

  res.status(200).json(user)
})

app.listen(3000)
// http://localhost:3000
// req = requisicao
// res = resposta



/* 
oziel
@270914Ozi

*/
