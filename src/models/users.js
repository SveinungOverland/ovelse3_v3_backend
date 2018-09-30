import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, unique: true },
    password: String
});



module.exports = mongoose.model('User', userSchema);


