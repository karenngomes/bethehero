const express = require("express");

const routes = express.Router();

routes.post("/users", (request, response) => {
  const params = request.body;
  console.log(params);
  return response.json({
    event: "Semana OmniStack 11.0",
    aluna: "Karen Gomes"
  });
});

module.exports = routes;
