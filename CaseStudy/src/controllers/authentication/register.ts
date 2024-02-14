import express, { Router, Request, Response } from "express";
import EcSuppliers from "../../models/EcSupplier";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Customer from "../../models/customer-model.ts";

const Registration = async (req: Request, res: Response) => {
  try {
    const { name, email, password, userType } = req.body;
    if (userType === "supplier") {
      const newSupplier = await EcSuppliers.create({
        full_name: name,
        e_mail: email,
        password: password,
        profile_pic: userType,
      });

      return res.send(`${newSupplier.registration_id}`);
    } else if (userType === "customer") {
      const newCustomer = await Customer.create({
        customerName: name,
        email: email,
        password: password,
        invitee: null,
      });

      return res.send(`${newCustomer.customerId}`);
    }
  } catch (error) {
    console.log("error caught", error);
    return res.send(error);
  }
};

export default Registration;
