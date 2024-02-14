import verifyTokenMiddleware from "../../middlewares/verify-jwt";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express, { Router, Request, Response } from "express";
import SubscriptionPlan from "../../models/app-subscription-models";
import EcSuppliers from "../../types/EcSupplier-type";

const customerReq = async(req: Request, res: Response) => {
    try {          
      const { supplierId, customerId } = req.body;
      const supplier = await EcSuppliers.findByPk(supplierId);
  
      res.json({ message: 'Customer request sent successfully.' });
      }

    catch (error) {
      console.error('Error in sendCustomerRequest:', error);
      res.status(200).json({ error:'Internal server error.' });
    }
}

  export default customerReq;