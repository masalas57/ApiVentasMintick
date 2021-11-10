import Express from "express"
import Cors from "cors"

const app = Express();
const Rutas = Express.Router();

app.use(Express.json());
app.use(Cors())

const productos = {
    "nombre":"tenis",
    "cantidad":5,
    "precio": 4000

}





app.get("/productos",(request,response)=>{
response.json(productos)

})

const PORT = 3001
app.listen (PORT)
console.log("server running on port " + PORT)
