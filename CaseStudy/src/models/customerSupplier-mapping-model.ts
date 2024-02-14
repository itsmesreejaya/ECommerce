import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/sequelize-config";
import CustomerSupplierMapping from "../types/CustomerSupplierMapping-type";


CustomerSupplierMapping.init({
    csMappingId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    customerId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Customer',
            key: 'customerId',
          },
    },
        supplierId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'EcSupplier',
                key: 'id',
              },
    }
},{
    sequelize,
    modelName:'customersuppliermapping',
    tableName:'customersuppliermapping'
}
);