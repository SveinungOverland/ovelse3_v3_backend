import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    username: String,
    password: String
});



module.exports = mongoose.model('User', userSchema);


