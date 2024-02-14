// const { DataTypes, Sequelize } = require('sequelize');
// const sequelize = require('../config/sequel-config'); // Import the Sequelize instance
import bcrypt from "bcrypt";
import sequelize from "../config/sequelize-config.ts";
import { DataTypes, Sequelize } from "sequelize";
import EcSuppliers from "../types/EcSupplier-type.ts"
 
EcSuppliers.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  e_mail:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  profile_pic:{
    type:DataTypes.STRING,
    allowNull: true,
  },
  registration_id:{
    type:DataTypes.STRING,
    allowNull: false,
    defaultValue: ()=>{
        return Math.floor(1000000+Math.random()*900000).toString();
    },
  },
  registration_time_stamp:{
    type:DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  }

 
},{
  sequelize,
  modelName:'ec_suppliers',
  tableName: 'ec_suppliers',
  hooks: {
    beforeCreate:(user:EcSuppliers)=>{
      const hashedPassword = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
      user.password = hashedPassword;
    }
  }
});
 
// module.exports = ec_suppliers ;
export default EcSuppliers;