import express, { Router, Request, Response } from "express";
import EcSuppliers from "../model/ec-suppliers";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import login from "../controllers/authentication/login";
import supplierRegistration from "../controllers/authentication/register";
import profile from "../controllers/supplier/profile";

const router = Router();
// const app = express();




router.post("/registration", async (req: Request, res: Response) => {
  supplierRegistration(req, res);
});


router.post("/login", (req: Request, res: Response) => {
    login(req,res);
   });

router.get("/profile", async (req: Request, res: Response) => {
    profile(req,res);
  });

export default router;
