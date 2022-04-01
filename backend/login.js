import mongoose from "mongoose";

const signin = new mongoose.Schema({
    Username: String,
    Password: String,
    // s
})

export default mongoose.model('SL',signin);