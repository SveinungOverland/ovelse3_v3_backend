import mongoose from 'mongoose';



const newsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    posterId: Number,

    timestamp: { type : Date, default: Date.now },

    imageURL: String,
    heading: String,
    content: String,

    channel: String, // Should be populated from channels

    tags: [String],


    comments: [{
        commenterId: Number,
        timestamp: { type: Date, default: Date.now },
        text: String
    }],

    ratings: [{
        raterId: Number,
        rating: Number // Number in range 0 - 6
    }]

});

module.exports = mongoose.model('News', newsSchema);