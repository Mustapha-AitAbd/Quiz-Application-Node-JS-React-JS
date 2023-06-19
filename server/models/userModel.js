const mongoose = require('mongoose');
const dcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    type:{
        type:String,
        default: "etudiant",
        required: true,
        enum: ["etudiant","professeur"]
    },
    nom:{
        type: String,
        //required: true
    },
    email:{
        type: String,
        //required: true,
        //unique: true
    },
    password:{
        type: String,
        //required: true
    },
    quizzes:[{type: mongoose.Schema.Types.ObjectId, ref: "Quiz"}]
})
userSchema.pre('save',async function (next){
    const salt = await dcrypt.genSalt();
    this.password = await dcrypt.hash(this.password,salt);
    next();
    });
module.exports = mongoose.model('User',userSchema);