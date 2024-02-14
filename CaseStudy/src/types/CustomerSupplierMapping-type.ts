import { Model } from "sequelize";

class CustomerSupplierMapping extends Model{

    csMappingId?:number;
    customer!:number;

}

export default CustomerSupplierMapping;