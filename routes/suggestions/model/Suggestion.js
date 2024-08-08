const mongoose = require('mongoose')

const suggestionSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    author: {
        type: String
    },
    suggestion: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    },
    anonymous: {
        type: Boolean
    },
    timeCreated: {
        type: Date
    }
})

module.exports = mongoose.model('suggestion', suggestionSchema)