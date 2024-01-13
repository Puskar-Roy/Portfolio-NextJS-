import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://puskarroy300:puskar@cluster0.wl5fufz.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
