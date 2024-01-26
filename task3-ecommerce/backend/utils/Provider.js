import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport  from "passport";
import {User} from "../models/User.js";
import mongoose from "mongoose";

export const connectPassport=()=>{
    passport.use(new GoogleStrategy({
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:process.env.GOOGLE_CALLBACK_URL,
    },async function (accessToken,refreshToken,profile,done){
      //database used here
      // Check if the user exists in the database, or create a new user
      const user= await User.findOne({
        googleId:profile.id,
      });
      if(!user){
         const newUser=await User.create({
          googleId:profile.id,
          name:profile.displayName,
          photo:profile.photos[0].value,

         })
         // the newly created user is passed to done(null, user) to indicate successful authentication
         return done(null,newUser);
      }
      else{
          // If an existing user is found, it is returned through done(null, existingUser) to indicate a successful authentication.
       
        return done(null,user);
      }

    }))
   
 //serialize for saving cookies auto called with passport identifies the user in db
   passport.serializeUser((user,done)=>{
        done(null,user.id);
    })
    //async because finding in db
    passport.deserializeUser(async (id,done)=>{
       const user=await User.findById(id);
        done(null,user);
    })
}