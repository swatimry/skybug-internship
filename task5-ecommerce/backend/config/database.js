import mongoose from "mongoose";
//creating function beacuse we dont database to be connected instantly

export const connectdb = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URL);
  console.log(`Database connection successfull with ${connection.host}`);
};
