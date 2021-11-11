import Express from "express"
import Cors from "cors"
import dotenv from "dotenv"
import db from "./connection/mongoConnection.js"
import Producto from "./Models/Producto.js"

const app = Express();
db();
const Rutas = Express.Router();

app.use(Express.json());
app.use(Cors())
dotenv.config({path: "./.env"})








app.get("/productos",(request,response)=>{
Producto.find({}).then((productos)=>{
    response.json(productos)
})

})

app.post("/productos",(request,response)=>{
const producto = new Producto({
    nombre : request.body.nombre,
    estado : request.body.estado,
    precio_unitario : request.body.precio_unitario,
    fecha : request.body.fecha

})

producto.save()
.then(()=>{
    response.sendStatus(201)

})
.catch((err)=>{
    console.error(err)
})
})

const PORT = process.env.PORT
app.listen (PORT)
console.log("server running on port " + PORT)
