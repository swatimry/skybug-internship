import app from "./app.js"
import { connectdb } from "./config/database.js";
import Razorpay from "razorpay";

connectdb();
export const instance = new Razorpay({
    key_id: process.env.RAZOR_PAY_KEYID,
    key_secret:process.env.RAZOR_PAY_KEYSECRET,
  });


app.get("/",(req,res,next)=>{
 res.send("<h1>hello</h1>")
});
app.listen(process.env.PORT,()=>
    console.log(`Server is running on ${process.env.PORT},in ${process.env.NODE_ENV} mode`)
);