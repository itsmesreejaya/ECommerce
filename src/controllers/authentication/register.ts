import express, { Router, Request, Response } from "express";
import EcSuppliers from "../../model/ec-suppliers";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

  
  const supplierRegistration = async (req: Request, res: Response) => {
    try {
      const { name, email, password, profile = "sdasdasd" } = req.body;
      const newSupplier = await EcSuppliers.create({
        full_name: name,
        e_mail: email,
        password: password,
        profile_pic: profile,
      });
  
      return res.send(`${newSupplier.registration_id}`);
    } catch (error) {
      console.log("error caught", error);
      return res.send("error");
    }
  };

  export default supplierRegistration;