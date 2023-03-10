import { MongoClient } from "mongodb";

// eslint-disable-next-line import/no-unresolved
import { initializeApp, cert } from "firebase-admin/app";
import app from "./app";
import "./proccess";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const certs = require("../cred.json");

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const port = process.env.PORT || 8080;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;

const uri = `mongodb+srv://${user}:${password}@${host}`;

export const firebaseApp = initializeApp({
  credential: cert(certs),
});

export const mongoService = new MongoClient(uri);

const connectMongoDb = () => {
  mongoService
    .connect()
    .then(() => {
      console.log("mongodb is connected");
    })
    .catch((e) => {
      console.error(e);
    });
};

connectMongoDb();

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
