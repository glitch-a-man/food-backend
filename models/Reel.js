const mongoose = require('mongoose');

const ReelSchema = new mongoose.Schema({
    videoUrl: {
        type: String,
        required: [true, 'Please add a video URL']
    },
    menuItemId: {
        type: mongoose.Schema.ObjectId,
        ref: 'MenuItem',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Reel', ReelSchema);
