import { Sequelize, DataTypes, Model } from 'sequelize';

interface CursoAttributes {
  curso: string;
}

interface CursoInstance extends Model<CursoAttributes> , CursoAttributes {}

export default (sequelize: Sequelize) => {
  const Curso = sequelize.define<CursoInstance>('Curso', {
    curso: DataTypes.STRING
  }, {
    tableName: 'cursos',
  });

  return Curso;
};

