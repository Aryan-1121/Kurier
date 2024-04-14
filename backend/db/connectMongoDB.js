import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('Connected to MongoDB ');

    } catch (error) {
        console.log('error while connecting to MongoDB ', error);
    }
}


export default connectToMongoDB;






