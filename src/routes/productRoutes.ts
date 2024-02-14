import express, { Router, Request, Response } from "express";
import EcSuppliers from "../model/ec-suppliers";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import login from "../controllers/authentication/login";
import supplierRegistration from "../controllers/authentication/register";
import profile from "../controllers/supplier/profile";
import addProducts from "../controllers/products/addProducts";

const router = Router();

router.get("/addProducts", async (req: Request, res: Response) => {
  addProducts(req,res);
});


export default router;
