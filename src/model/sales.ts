const mongoose  = require("mongoose");
const { Schema} = mongoose;

const salesSchema = new Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    income: String,
    city: String,
    car: String,
    quote: String,
    phone_price: String
})

export const salesModel = mongoose.models.myapp || mongoose.model('myapp', salesSchema)

