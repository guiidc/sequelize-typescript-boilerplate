import dbConfig from '../config/database';
import { Sequelize } from 'sequelize';
import associations from './associations';
import Curso from './Curso';
import Materia from './Materia';
import CursoMateria from './CursoMateria';

const models = [Curso, Materia, CursoMateria];

const sequelize = new Sequelize (dbConfig as object);

models.forEach((model) => model(sequelize));

associations(sequelize)

export default sequelize;