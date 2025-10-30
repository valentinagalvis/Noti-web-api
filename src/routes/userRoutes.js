const express = require("express");
const router = express.Router();
const Usuario = require("../models/userModel");

// post
router.post("/usuarios", (req, res) => {
  const usuario = new Usuario(req.body);
  usuario
    .save()
    .then((data) => res.status(201).json({ mensaje: "Usuario creado correctamente", data }))
    .catch((error) => res.status(500).json({ mensaje: "Error al crear usuario", error }));
});

// get
router.get("/usuarios", (req, res) => {
  Usuario.find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ mensaje: "Error al obtener usuarios", error }));
});

// put
router.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, correo, contrasena, rol } = req.body;
  Usuario.updateOne({ _id: id }, { $set: { nombre, correo, contrasena, rol } })
    .then((data) => res.json({ mensaje: "Usuario actualizado correctamente", data }))
    .catch((error) => res.status(500).json({ mensaje: "Error al actualizar usuario", error }));
});

// delete
router.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  Usuario.deleteOne({ _id: id })
    .then((data) => res.json({ mensaje: "Usuario eliminado correctamente", data }))
    .catch((error) => res.status(500).json({ mensaje: "Error al eliminar usuario", error }));
});

module.exports = router;
