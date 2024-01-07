import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

connectDB();

// Approach-2 (UP)^

// Approach-1 (BELOW):-
/*
import express from "express";
const app = express();
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => { // when database is connected and somehow the express app is not able to communicate with the database
            console.error("ERRR: ", error);
            throw error;
        });
        
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
       console.error("ERROR: ", error);
       throw error; 
    }
}) ()
*/