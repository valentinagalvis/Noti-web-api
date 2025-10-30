const express = require("express");
const router = express.Router();
const Categoria = require("../models/categoriaModel");

// Crear categoría
router.post("/categorias", (req, res) => {
  const categoria = new Categoria(req.body);
  categoria
    .save()
    .then((data) => res.status(201).json({ mensaje: "Categoría creada", data }))
    .catch((error) => res.status(500).json({ mensaje: "Error al crear categoría", error }));
});

// Obtener todas las categorías
router.get("/categorias", (req, res) => {
  Categoria.find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ mensaje: "Error al obtener categorías", error }));
});

// Actualizar una categoría
router.put("/categorias/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  Categoria.updateOne({ _id: id }, { $set: { nombre, descripcion } })
    .then((data) => res.json({ mensaje: "Categoría actualizada", data }))
    .catch((error) => res.status(500).json({ mensaje: "Error al actualizar categoría", error }));
});

// Eliminar una categoría
router.delete("/categorias/:id", (req, res) => {
  const { id } = req.params;
  Categoria.deleteOne({ _id: id })
    .then((data) => res.json({ mensaje: "Categoría eliminada", data }))
    .catch((error) => res.status(500).json({ mensaje: "Error al eliminar categoría", error }));
});

module.exports = router;
