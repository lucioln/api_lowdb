require('dotenv').config();
const express = require("express");
const cursosRouter = require('./routes/cursos');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usar o router de cursos
app.use('/cursos', cursosRouter);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
