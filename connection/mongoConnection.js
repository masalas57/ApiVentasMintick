import  Mongoose  from "mongoose";
import dotenv from "dotenv";



dotenv.config({path: "./.env"}) 

const connectionString = process.env.DATABASE_URL

const db = ()=>{
    Mongoose.connect(connectionString)
    .then(()=>{
        console.log("conectado a base de datos")
    })
    .catch((err)=>{
        console.error(err)
    })

}

export default db;