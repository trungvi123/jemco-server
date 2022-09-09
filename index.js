import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import productRouter from './routers/productRouter.js'
import adminRouter from './routers/adminRoutes.js'
import userRouter from './routers/userRoutes.js'
import mongoose from 'mongoose';
import env from 'dotenv';

env.config()

const app = express();
const PORT = process.env.PORT || 6000 // add your port
const URI = process.env.URI_BASE // add your URI

// ADMIN_KEY_SIGNUP = 'admin@admin.ctu.edu.vn' cần thêm adminKey khi thêm 1 admin
app.use(bodyParser.json({limit:'30mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}))
app.use(cors())
app.use('/product',productRouter)
app.use('/admin',adminRouter) 
app.use('/user',userRouter)

mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(PORT,()=>{
        console.log('SERVER RUN');
    })
    console.log('connected');
}).catch((err)=>{
    console.log(err);

})



