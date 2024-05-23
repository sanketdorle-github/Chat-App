import mongoose  from "mongoose";

const connectToMongoDb= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongodb");
        
    } catch (error) {
        console.log("error connecting to mongo db",error.message);
    }

}

export default connectToMongoDb