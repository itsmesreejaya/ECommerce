import mongoURI from "../config/mongodb-config";
import { MongoClient,ServerApiVersion, Db } from "mongodb";

const client = new MongoClient(mongoURI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  const connectToMongoDb = async() : Promise<void> => {
    try {
        await client.connect();
 
        const db : Db = client.db("e-commerce");
 
        await db.command({ping : 1});
 
        console.log("Pinged Your Deployment. You are successfully connected to Mongo DB!")
    }
    catch(err){
        console.log("mongodb error is",err);
    }
}
 
const stopMongoDb = async() : Promise<void> => {
   await client.close();
}

export {client,connectToMongoDb,stopMongoDb};