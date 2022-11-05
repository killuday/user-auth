require('dotenv').config();
const express=require('express');
const app=express();
const cors=require ('cors');
const connection=require('./DB');
const userRoutes=require('./routes/user')
const authRoutes=require('./routes/auth')



//database connection
connection();


//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use("api/user",userRoutes)
app.use("api/auth",authRoutes)

const port=process.env.port|| 8080


app.listen(port, ()=> console.log(`Listening on port ${port}.......`));




