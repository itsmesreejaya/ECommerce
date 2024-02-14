import express, { Router, Request, Response } from "express";
import login from "../controllers/authentication/login";
import profile from "../controllers/supplier/profile";
import Registration from "../controllers/authentication/register";
import getSubscriptionPlans from "../controllers/subscription/getSubscription";

const router = Router();


router.post("/login", (req: Request, res: Response) => {
    login(req,res);
   });

router.get("/profile", async (req: Request, res: Response) => {
    profile(req,res);
  });


router.post("/register",async(req:Request,res:Response)=>{
  Registration(req,res);
})

router.get("/getSubscriptionPlans", async(req:Request, res:Response)=>{
  getSubscriptionPlans(req,res);
})

export default router;