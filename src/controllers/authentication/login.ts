import express, { Router, Request, Response } from "express";
import EcSuppliers from "../../model/ec-suppliers";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// import app from "../../server"

// const login = async(req:Request,res:Response)

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
  const { email, password, usertype } = req.body;
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
  return res.json("no such usertype found");
};

export default login;
