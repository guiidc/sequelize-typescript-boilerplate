import { Sequelize, Model, DataTypes } from 'sequelize';

interface MateriaAttributes {
  materia: string;
}

interface MateriaInstance extends Model<MateriaAttributes>, MateriaAttributes {}

export default (sequelize: Sequelize) => {
  const Materia = sequelize.define<MateriaInstance>('Materia', {
    materia: DataTypes.STRING,
  }, {
    tableName: 'materias'
  });

  return Materia
}