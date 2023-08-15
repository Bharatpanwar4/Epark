import path from 'path'
import express from 'express'

import {dirname} from 'path'

import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
import connectDB from './config/db.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
const port = process.env.PORT || 5000

// mongoDB connection
connectDB() 

const app = express()
// body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// cookie parser middleware
app.use(cookieParser())




app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/upload',uploadRoutes)
app.get(`/api/config/paypal`,(req,res)=>res.send({clientId:process.env.PAYPAL_CLIENT_ID}))

// const __dirname = path.resolve();
// app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname,'/Frontend/dist')))


app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'/Frontend/build','index.html'))
})
// // // production
// if(process.env.NODE_ENV === 'production'){
//     const __dirname = path.resolve();
//     app.use('/uploads', express.static('/var/data/uploads'));

//     app.use(express.static(path.join(__dirname, '/frontend/dist')));
//     app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   );
// }
// else{
//     app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
//     app.get('/',(req,res)=>{
//         res.send('Api is running')
//     })
    
// }

app.use(notFound)
app.use(errorHandler)
app.listen(port,()=>{console.log(`server running on port ${port}`);})