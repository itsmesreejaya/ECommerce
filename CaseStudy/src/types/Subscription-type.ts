import { Model } from "sequelize";

class SubscriptionPlan extends Model{

    planId?:number;
    subscriptionFee!:string;
    maxCustomers!:number;

};

export default SubscriptionPlan;