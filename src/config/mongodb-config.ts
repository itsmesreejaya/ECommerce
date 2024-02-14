import { config } from "dotenv";

config({path: "environment/.env"})


const mongoURI =process.env.mongoURI??"";

export default mongoURI;