const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    // name
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        unique: [true, "Name already exists"]
    },
    // type
    petType: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be at least 3 characters"]
    },
    // description
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    // skills 0 -3
    skillOne: {
        type: String
    }, 
    skillTwo: {
        type: String
    }, 
    skillThree: {
        type: String
    },
    numberOfLikes: { type: Number, default: 0 }
}, { timestamps: true });

PetSchema.plugin(uniqueValidator);
module.exports.Pet = mongoose.model('Pet', PetSchema);