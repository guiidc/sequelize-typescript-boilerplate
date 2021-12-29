import { Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  const { Curso, Materia, CursoMateria } = sequelize.models;

  Curso.belongsToMany(Materia, {
    through: CursoMateria,
    as: 'materias',
    foreignKey: 'curso_id',
    otherKey: 'materia_id',
  });

  Materia.belongsToMany(Curso, {
    as: 'cursos',
    through: CursoMateria,
    foreignKey: 'materia_id',
    otherKey: 'curso_id',
  });

}