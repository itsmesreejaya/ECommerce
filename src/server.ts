import sequelize from "./config/sequel-config";
import indexRoutes from "./routes/index.ts";
import supplierRoutes from "./routes/supplierRoutes.ts";
// import serverRoutes from "./routes/index.ts.ts";
import EcSuppliers from "./model/ec-suppliers";
import express, { Express, NextFunction, Request, Response } from "express";
import verifyToken from "./middlewares/verify_jwt.ts";
import {client,connectToMongoDb,stopMongoDb} from "./services/mongodb.ts"
import productRoutes from "./routes/productRoutes.ts";
import cors from 'cors';


const app: Express = express();
app.use(express.json());
connectToMongoDb();


const middleware = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("set-cookie", ["name=sree", "subject=node"]);
  console.log(req.get("x-api-key"));
  if (req.get("x-api-key") == "hello") {
    next();
  } else {
    return res.send("no such api key found");
  }
};


const corsOptions = {
  origin: "http://localhost:8080",
  method: "GET",
};

// app.use(middleware);

app.use("/api/v2", middleware, indexRoutes);
// app.use(serverRoutes);

app.use("/api/v1", verifyToken, supplierRoutes);
// app.use('/api/v2',customrRoutes);

app.use("/api/v3",productRoutes);


app.listen(3000, () => {
  console.log("listening......");
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db synced");
  })
  .catch((error: any) => {
    console.log("error caught", error);
  });

// const supplierRegistration = async(req: Request, )

export default app;
