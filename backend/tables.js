import mongoose from 'mongoose'

const add = new mongoose.Schema ({
    Title: String,
    Description: String,
    Date_added: Date,
})

export default mongoose.model('Log',add);