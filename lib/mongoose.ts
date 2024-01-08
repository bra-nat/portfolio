import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    if(!process.env.MONGODB_URL) {
        return console.log("MISSING MONGODB_URL")
    }
    if(isConnected) {
        return console.log("MONGODB is connected already")
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "portfolio"
        })

        isConnected = true;

        console.log("MONGODB is connected")
    } catch (error) {
        console.log(error)
    }
}