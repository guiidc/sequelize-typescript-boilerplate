import { Request, Response } from 'express';
import { Sequelize } from 'sequelize'
import { Router } from 'express';
import sequelize from './models'

const { models } = sequelize;


const router = Router();

router.get('/cursos', async (req, res) => {
  const cursos = await models.Curso.findAll();
  res.status(200).json(cursos)
});

router.post('/cursos', async (req, res) => {
  const curso = await models.Curso.create(req.body);
  res.status(201).json(curso)
});

// metodo Get funcionando
// no metodo GET devemos usar o ALIAS em CamelCase
router.get('/cursos/:id', async (req, res) => {
  const curso: any = await models.Curso.findByPk(1);
  const cursoWithMateria = await curso.getMaterias();
  res.status(200).json(cursoWithMateria)
});

router.get('/materias', async (req, res) => {
  const materias = await models.Materia.findAll();
  res.status(200).json(materias)
});

router.post('/materias', async (req, res) => {
  const materia = await models.Materia.create(req.body);
  res.status(201).json(materia)
});

// metodo model.addOtherModel funcionando
// no metodo add deve usar o NOME DO MODEL
router.post('/curso-materia', async (req, res) => {
  const materia = await models.Materia.findByPk(1);
  const curso: any = await models.Curso.findByPk(1);
  console.log(curso);
  await curso.addMateria(materia)
  res.status(200).json(materia)
});

export default router;