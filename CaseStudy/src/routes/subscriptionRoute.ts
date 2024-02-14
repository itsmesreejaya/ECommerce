import express, { Router, Request, Response, NextFunction } from "express";
import createSubscriptionPlan from "../controllers/subscription/createSubscription";



const router = Router();


router.post("/createSubscriptionPlan", (req: Request, res: Response, next: NextFunction) => {
        createSubscriptionPlan(req,res, next);
});


export default router;