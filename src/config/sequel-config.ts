// const Sequelize = require('sequelize');
import { Sequelize } from "sequelize";
 
const sequelize = new Sequelize({
  database: 'ecommerce',
  username: 'root',
  password: 'experion@123',
  host: '127.0.0.1',
  dialect: 'mysql',
});
 
// module.exports = sequelize;
export default sequelize;