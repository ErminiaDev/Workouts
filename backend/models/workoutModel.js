const mongoose = require('mongoose')
//defines the structure of a document
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required:true
    }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)

