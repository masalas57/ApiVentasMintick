import Express from "express"
import Cors from "cors"
import dotenv from "dotenv"
import db from "./connection/mongoConnection.js"

const app = Express();
db();
const Rutas = Express.Router();

app.use(Express.json());
app.use(Cors())
dotenv.config({path: "./.env"})


const productos = {
    "nombre":"tenis",
    "cantidad":5,
    "precio": 4000

}





app.get("/productos",(request,response)=>{
response.json(productos)

})

const PORT = process.env.PORT
app.listen (PORT)
console.log("server running on port " + PORT)
