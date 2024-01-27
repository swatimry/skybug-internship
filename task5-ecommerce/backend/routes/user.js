import express from "express";
import passport from "passport";
import { myProfile,logout ,getAdminUsers,getAdminStats} from "../controllers/user.js";
import { isAuthenticated,authorizeAdmin } from "../middlewares/auth.js";

const router=express.Router();
router.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"],
}))

router.get("/login",passport.authenticate("google",{    
    
    successRedirect:process.env.FRONT_END_URL
 }));
 
router.get("/me",isAuthenticated,myProfile);
//admin route
router.get("/admin/users",isAuthenticated,authorizeAdmin,getAdminUsers);
router.get("/admin/stats",isAuthenticated,authorizeAdmin,getAdminStats);

router.get("/logout",logout);

export default router;