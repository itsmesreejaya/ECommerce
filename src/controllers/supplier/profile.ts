import { Request,Response } from "express";
import EcSuppliers from "../../model/ec-suppliers";


const profile = async(req:Request,res:Response): Promise<
Response<
  any,
  Record<
    string,
    | { message: string }
    | { token: string; client_type: string; registration_id: string }
  >
>
> =>{
    const { regID, usertype } = req.body;
    const found = await EcSuppliers.findOne({
      where: { registration_id: regID },
    });
    if (found == null) {
      return res.send("no such user found");
    } else {
      return res.json(found.dataValues);
    }
  }

  export default profile;