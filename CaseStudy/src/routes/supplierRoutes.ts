import express, { Router, Request, Response } from "express";
import EcSuppliers from "../models/EcSupplier";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import login from "../controllers/authentication/login";
import profile from "../controllers/supplier/profile";

const router = Router();

router.get("/profile", async (req: Request, res: Response) => {
  profile(req, res);
});

export default router;
