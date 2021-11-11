const mongoose = require("mongoose")
const dressSchema = mongoose.Schema({
    types: String,
    fabric: String,
cost: Number
})
module.exports = mongoose.model("dress",
dressSchema)