const mongoose = require('mongoose');

const superhheroSchema = mongoose.Schema({
    superhero_name:{
        type: String,
        required: true,
    },
    superpowers:{
        type: Array,
        required: true,
    },
    isAlive:{
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model('Superhero', superhheroSchema);