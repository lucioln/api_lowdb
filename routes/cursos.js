const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const db = require('../db/db');
const upload = require('../config/multerConfig');

// Rota GET para obter todos os cursos
router.get('/', async (req, res) => {
  const cursos = db.get('cursos').value();
  res.send(cursos);
});

// Rota GET para obter um curso por ID
router.get('/:id', async (req, res) => {
  const curso = db.get('cursos').find({ id: req.params.id }).value();
  if (!curso) {
    return res.status(404).send("Curso não encontrado");
  }
  res.send(curso);
});

// Rota POST para criar um novo curso com upload de arquivo
router.post('/', upload.single('file'), async (req, res) => {
  const novoCurso = { 
    id: shortid.generate(), 
    ...req.body, 
    file: req.file ? req.file.filename : null 
  };
  db.get('cursos').push(novoCurso).write();
  res.status(201).send(novoCurso);
});

// Rota PUT para atualizar um curso existente
router.put('/:id', async (req, res) => {
  const cursoAtualizado = db.get('cursos')
    .find({ id: req.params.id })
    .assign(req.body)
    .write();
  res.send(cursoAtualizado);
});

// Rota DELETE para excluir um curso
router.delete('/:id', async (req, res) => {
  // Implementação futura
  res.status(501).send("Para excluir, contate o desenvolvedor");
});

module.exports = router;
