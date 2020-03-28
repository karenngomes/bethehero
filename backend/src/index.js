const express = require("express");

const app = express();

app.use(express.json());

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Exemplo: '/users?page=2&name=Karen&idade=21
 * Route Params: Parâmetros utilizados para identificar recursos
 * Exemplo: '/users/:id
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 *
 */

/**
 * Banco de Dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQLServe
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select('*')
 * 
 */
 
app.post("/users", (request, response) => {
  const params = request.body;
  console.log(params);
  return response.json({
    event: "Semana OmniStack 11.0",
    aluna: "Karen Gomes"
  });
});

app.listen(3333);
