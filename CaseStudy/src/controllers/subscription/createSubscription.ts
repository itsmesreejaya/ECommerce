import verifyTokenMiddleware from "../../middlewares/verify-jwt";
import SubscriptionPlan from "../../models/app-subscription-models";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express, { Router, Request, Response, NextFunction } from "express";





const createSubscriptionPlan =  async(req: Request, res: Response, next: NextFunction) => {
    try {
      const {planId,subscriptionFee,maxCustomers} = req.body;
      const subscriptionPlan = await SubscriptionPlan.create({
        planId:planId,
        subscriptionFee:subscriptionFee,
        maxCustomers:maxCustomers,
 
      })
      return res.json({message: "new subscription plan created "});
    } catch (error) {
      console.error('Error in createSubscriptionPlan:', error);
      res.status(200).json({ error:'Internal server error.' });
    }
  }

  export default createSubscriptionPlan;