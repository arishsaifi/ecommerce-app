// import userModel from "../models/userModel.js"

import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelper.js";

const registerController = async (req,res)=>{
    try {
        const {name,email,password,phone,address} = req.body;
        //validation
        if(!name){
            return res.send({error:"Name is required"});
        }
        if(!email){
            return res.send({error:"Email is required"});
        }
        if(!password){
            return res.send({error:"Password is required"});
        }
        if(!phone){
            return res.send({error:"Phone is required"});
        }
        if(!address){
            return res.send({error:"Address is required"});
        }
        //check user
        const existinguser = await userModel.findOne({email:email})
        //existing user 
        if (existinguser) {
            return res.status(200).res.send({
                sucess:true,
                message:"already user exists please login"
            })
        }
        //register user 
        const hashedPassword = await hashedPassword(password);
        //save
        const user = new userModel({name,email,phone,address,password:hashedPassword});
        res.status(201).send(
            {
                name,email,phone,address,
                password:hashedPassword
            }
        )

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"somthing went wrong",
            error:"Registration error"
        })
    }

}
export default registerController