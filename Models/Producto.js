import Mongoose from "mongoose";



const productoSchema = new Mongoose.Schema({

    nombre : String,
    estado : String,
    precio_unitario : Number,
    fecha : String


})

const Producto = Mongoose.model("Producto",productoSchema)
export default Producto