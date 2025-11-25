const bcrypt = require("bcrypt"); // importando el componente bcrypt
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

userSchema.methods.encryptClave = async (clave) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(clave, salt);
};
module.exports = mongoose.model("User", userSchema);
