const mongoose = require("mongoose");

const fraseSchema = new mongoose.Schema({
    frase: {
        type: String,
        required: true
    }
}, { capped: { size: 1024, max: 5 }, timestamps: true });

const Frase = mongoose.model("Frases", fraseSchema);

module.exports = Frase;