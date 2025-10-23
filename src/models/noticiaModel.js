const mongoose = require("mongoose");
const noticiaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        default: "Desconocido"
    },
    categoria: {
        type: String,
        enum: ["Arte","Moda","Cultura"],
        requires: true
    },
    fuente: {
        type: String,
        default: "Interna"
    },
    revisado: {
        type: Boolean,
        default: false
    },
    fechaPublicacion: {
        type: Date,
        default: null
    },
    fechaRegistroBD: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Noticia", noticiaSchema);