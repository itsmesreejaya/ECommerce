// Define models
import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize-config";
import {Model} from "sequelize"
import SubscriptionPlan from "../types/Subscription-type";


SubscriptionPlan.init( {
    planId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subscriptionFee: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maxCustomers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    sequelize,
    modelName:'subcriptionplans',
    tableName: 'subcriptionplans'
  });
  



  export default SubscriptionPlan;