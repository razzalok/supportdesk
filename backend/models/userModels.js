const mongoose = require('mongoose')


const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required: [true,'Please add a Name'],
        },
        email:{
            type:String,
            required: [true,'Please add a Email'],
        },
        password:{
            type:String,
            required: [true,'Please add a password'],
        },
        isAdmin:{
            type:Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)
module.exports= mongoose.model('User', userSchema)