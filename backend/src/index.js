const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

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

app.listen(3333);
