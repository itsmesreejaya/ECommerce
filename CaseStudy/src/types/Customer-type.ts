import { Model } from "sequelize";

class Customer extends Model {
  customerId?: number;
  customerName!: string;
  email!: string;
  password!: string;
  invitee!: number;
}

export default Customer;
