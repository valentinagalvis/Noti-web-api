//Importaciones del framework express y noticiaModel de la carpeta models
const express = require("express");
const router = express.Router();
const noticiaSchema = require("../models/noticiaModel");

//Metodo POST, para agregar Noticias nuevas
router.post("/noticia/add",(req,res) => {
   const noticia = noticiaSchema(req.body);
   noticia
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

//Metodo GET, para consultar todos los datos de las noticias de la base de datos
router.get("/noticia/all", (req,res) => {
    noticiaSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Metodo GET con parametros, para consultar una noticia por su id
router.get("/noticia/:id",(req,res) => {
    const { id } = req.params;
    noticiaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});