
const mongoose = require("mongoose"); // Importando mongoose

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
        unique: true,
    },
    contraseña: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        enum: ["admin", "editor", "lector"],
        default: "lector",
    },
    fechaRegistro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Usuario", userSchema);
