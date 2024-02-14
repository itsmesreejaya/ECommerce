import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/sequelize-config";
import Customer from "../types/Customer-type";
import EcSuppliers from "./EcSupplier";
Customer.init(
  {
    customerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: () => {
        return Math.floor(1000000 + Math.random() * 900000).toString();
      },
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invitee: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "customer",
    tableName: "customer",
  }
);

export default Customer;
