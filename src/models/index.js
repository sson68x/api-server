'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const modelInterface = require('./model-interface');
const foodSchema = require('./food');
const personSchema = require('./person');

const DATABASE_URL = process.env.NODE_ENV === 'test'
    ? 'sqlite::memory'
    : process.env.DATABASE_URL || 'postgres://localhost:5432/lab4-api-app';

const sequelize = new Sequelize(DATABASE_URL);

// For deploying
// const sequelize = new Sequelize(DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//         rejectUnauthorized: false,
//     }
//   }
// });

const PersonModel = personSchema(sequelize, DataTypes);
const FoodModel = foodSchema(sequelize, DataTypes);

PersonModel.hasMany(FoodModel, { foreignKey: 'personId', sourceKey: 'id' });
FoodModel.belongsTo(PersonModel, { foreignKey: 'personId', targetKey: 'id' });

module.exports = {
    sequelize,
    foodInterface: new modelInterface(FoodModel),
    personInterface: new modelInterface(PersonModel),
};
