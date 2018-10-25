import mongoose from 'mongoose';


const channelSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, unique: true },
    description: String
});

module.exports = mongoose.model('Channel', channelSchema);