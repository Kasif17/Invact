const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    releaseYear: Number,
    genre: String,
    watched: { type: Boolean, default: false },
    rating: { type: Number, min: 1, max: 5 },
    review: String
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
