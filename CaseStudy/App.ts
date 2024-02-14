import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./src/config/sequelize-config";
import verifyTokenMiddleware from "./src/middlewares/verify-jwt";
import supplierRoutes from "./src/routes/supplierRoutes";
import indexRoutes from "./src/routes/index";
import subscriptionRoute from "./src/routes/subscriptionRoute";
import adminJWT from "./src/middlewares/adminJWT";
import Customer from "./src/models/customer-model.ts";

const app = express();
app.use(express.json());

sequelize
  .sync({
    force: false,
  })
  .then(() => {
    console.log("db synced");
  })
  .catch((error) => {
    console.log(error);
  });

// const middleware = (req: Request, res: Response, next: NextFunction) => {
//   res.setHeader("set-cookie", ["name=sree", "subject=node"]);
//   console.log(req.get("x-api-key"));
//   if (req.get("x-api-key") == "hello") {
//     next();
//   } else {
//     return res.send("no such api key found");
//   }
// };

app.use("/api/v1", indexRoutes);
app.use("/api/v2", verifyTokenMiddleware, supplierRoutes);
app.use("/api/v3", adminJWT, subscriptionRoute);

app.listen(3000, () => {
  console.log("listening......");
});

// // API to create subscription plans
// app.post("/createSubscriptionPlan", createSubscriptionPlan);

// // API to get subscription plans
// app.get("/getSubscriptionPlans", getSubscriptionPlans);

// // API for suppliers to register with a specific subscription plan
// app.post("/registerSupplier", registerSupplier);

// // API for suppliers to send customer requests
// app.post("/sendCustomerRequest", customerReq);

// Sync the database and start the server
// async function syncDatabase() {
//   try {
//     await sequelize.sync();
//     console.log("Database synchronized successfully.");
//   } catch (error) {
//     console.error("Error synchronizing database:", error);
//   }
// }

// Sync the database and start the server
