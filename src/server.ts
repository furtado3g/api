import express from "express";
import * as dotenv from 'dotenv';
import cors from "cors";
//import Password from "./util/passwordEncode"
import routes from "./routes";
const app = express();
const port = process.env.PORT;
dotenv.config()
/* const pass = 'ola mundo'
const psw = new Password(pass,process.env.KEY||'')
let msg = psw.encode()
msg = psw.decode() */
const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: process.env.BASEURL,
  preflightContinue: false,
};
// @ts-ignore: Unreachable code error
app.use(cors(options)); 
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`server has started at port  ${process.env.PORT}`);
});
