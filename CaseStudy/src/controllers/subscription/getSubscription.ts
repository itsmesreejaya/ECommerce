import verifyTokenMiddleware from "../../middlewares/verify-jwt";
import SubscriptionPlan from "../../models/app-subscription-models";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express, { Router, Request, Response } from "express";

const getSubscriptionPlans =  async(req: Request, res: Response) => {
    try {
      
        const subscriptionPlans = await SubscriptionPlan.findAll();
        res.json(subscriptionPlans);
   

    } catch (error) {
      console.error('Error in getSubscriptionPlans:', error);
      res.status(200).json({ error: 'Internal server error.' });
    }
  }

  export default getSubscriptionPlans;