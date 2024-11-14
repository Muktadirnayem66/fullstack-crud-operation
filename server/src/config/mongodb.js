import mongoose from "mongoose";


const connectDB = async ()=>{
    mongoose.connection.on("connected", ()=>{
        console.log("DB Connected Successful");
        
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/crud`)
}

export default connectDB