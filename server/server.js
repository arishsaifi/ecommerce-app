import express from "express";
// import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
// import cors from "cors";
import connectDB from "./config/db.js";
import authRoute from './routes/authRoute.js'


//config
dotenv.config();

//db config 
connectDB();

const app = express();

//middlewares
app.use(morgan('dev'))

// app.use(bodyParser.urlencoded({extended:false}))
// app.use(express.static('public'))
// app.use(bodyParser.json())
// app.use(cors());

//routes
app.use('/api/v1/auth',authRoute)



app.get('/',(req,res)=>{
    res.json({
        message:"allgood",
        working:"wonderful"
    })
}) 

app.listen(process.env.PORT,()=>{
    console.log(`sever started succesfully on port ${process.env.PORT}`)
})





// const User = mongoose.model('User',{
//     name:String,
//     email:String,
//     password :String
// })
// //Read
// app.get('/', async (req,res)=>{
//     try {
//         const user = await User.find();
//         const userData =  user.filter((user)=> user.name === "Haris");
//         console.log(userData)
//         res.json({message:"allgood",})
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             fail:"internal server error"
//         })
//     }
// })

// //create
// app.post('/user',async (req,res)=>{
//     try {
//         const {name ,email, password} = req.body;
//         await User.create({name,email,password});
//         res.json({
//             message:"allgood",
//             hello :"this is working fine"
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({fail:"cant create new object"})
//     }
    
// })

// //patch
// app.post('/update',async (req,res)=>{
//     try {
//         const {name,email,password} = req.body;
//         const id = req.params;
//         console.log(id)
//         await User.findByIdAndUpdate()
//     } catch (error) {
//         res.status(500).json({
//             message:"somthing went wrong"
//         })
//     }
// })