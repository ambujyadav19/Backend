import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI
        if (!mongoUri) {
            throw new Error("MONGODB_URI is not set. Add it to the .env file.")
        }

        const connectionInstance = await mongoose.connect(mongoUri, { dbName: DB_NAME })
        console.log(`MongoDB connected! DB host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("MongoDB connection error:", error)
        process.exit(10)
    }

}

export default connectDB