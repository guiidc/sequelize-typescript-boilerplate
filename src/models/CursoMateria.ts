import { Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  const CursoMateria = sequelize.define('CursoMateria', {}, {
    tableName: 'curso_materia'
  });

  return CursoMateria;
}