import express, { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import EcSuppliers from "../../models/EcSupplier";
import createSubscriptionPlan from "../subscription/createSubscription";
import Customer from "../../types/Customer-type";

const login = async (
  req: Request,
  res: Response
): Promise<
  Response<
    any,
    Record<
      string,
      | { message: string }
      | { token: string; client_type: "string"; registration_id: string }
    >
  >
> => {
  const { email, password, usertype} = req.body;
  if (usertype == "supplier") {
    const found = await EcSuppliers.findOne({
      where: { e_mail: email },
    });
    if (found && bcrypt.compareSync(password, found.password)) {
      const token = jwt.sign(
        { user_reg_id: found?.registration_id, usertype },
        "your_secret",
        { expiresIn: "24h" }
      );
      return res.status(200).json(token);
    } else {
      return res.json("no such user found");
    }
  }
  
  else if(usertype=="customer"){
    const customer = await Customer.findOne({
      where: {email:email},
    });
    if (customer && (password==customer.password)) {
  
      const token = jwt.sign(
        { user_reg_id: customer?.customerId, usertype },
        "your_secret",
        { expiresIn: "24h" }
      );
      return res.status(200).json(token);
      // return res.send("customer");
    
  }
}
    return res.json("no such usertype found");

};

export default login;



