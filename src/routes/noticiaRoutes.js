//Importaciones del framework express y noticiaModel de la carpeta models
const express = require("express");
const router = express.Router();
const noticiaSchema = require("../models/noticiaModel");

//Metodo Post, para agregar Noticias nuevas
router.post("/noticia/add",(req,res) => {
   const noticia = noticiaSchema(req.body);
   noticia
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});