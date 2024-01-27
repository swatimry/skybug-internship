import { asyncError } from "../middlewares/errormiddleware.js";
import {User} from "../models/User.js"
import { Order } from "../models/order.js";

export const myProfile=(req,res,next)=>{
    res.status(200).json({
        success:true,
        user:req.user,
    });
};

export const logout=(req,res,next)=>{
     req.session.destroy((err)=>{
    if(err){
        return next(err);
    }
  
       res.clearCookie("connect.sid",{
        secure:process.env.NODE_ENV==="development"?false:true,
        httpOnly:process.env.NODE_ENV==="development"?false:true,
        sameSite:process.env.NODE_ENV==="development"?false:"none",

       });
       res.status(200).json({
        message:"logged out"
       }); 
    
   })

}
export const getAdminUsers=asyncError(async(req,res,next)=>{
    const users=await User.find({});
    res.status(200).json({
        success:true,
        users,
    })
})

export const getAdminStats=asyncError(async (req,res,next)=>{
    const usersCount=await User.countDocuments();
    const orders=await Order.find({});
    const preparingorders=orders.filter((i)=>i.orderStatus==="Processing");
    const shippedorderes=orders.filter((i)=>i.orderStatus==="Shipped");
    const deliveredorderes=orders.filter((i)=>i.orderStatus==="Delivered");

    let totalincome=0;
    orders.forEach((i)=>{
        totalincome+=i.totalAmount;
    });

    res.status(200).json({
        success:true,
        usersCount,
        ordersCount:{
            total: orders.length,
            preparing: preparingorders.length,
            shipped: shippedorderes.length,
            delivered: deliveredorderes.length,
        },
        totalincome,
    })
})