//Importaciones del framework express y noticiaModel de la carpeta models
const express = require("express");
const router = express.Router();
const noticiaSchema = require("../models/noticiaModel");

//Metodo POST, para agregar Noticias nuevas
router.post("/noticia/add", (req,res) => {
   const noticia = noticiaSchema(req.body);
   noticia
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }));
});

//Metodo GET, para consultar todos los datos de las noticias de la base de datos
router.get("/noticia/all", (req,res) => {
    noticiaSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Metodo GET con parmetro, este metodo permite consultar noticias por la categoria de Arte
router.get("/noticias/arte", (req,res) =>{ 
noticiaSchema.find({categoria:{$eq:"Arte"}})
             .then((data) => res.json(data))
             .catch((error) => res.json({message: error}));
});

//Metodo GET con parmetro, este metodo permite consultar noticias por la categoria de Moda
router.get("/noticias/moda", (req,res) =>{ 
noticiaSchema.find({categoria:{$eq:"Moda"}})
             .then((data) => res.json(data))
             .catch((error) => res.json({message: error}));
});

//Metodo GET con parmetro, este metodo permite consultar noticias por la categoria de Cultura
router.get("/noticias/cultura", (req,res) =>{ 
noticiaSchema.find({categoria:{$eq:"Cultura"}})
             .then((data) => res.json(data))
             .catch((error) => res.json({message: error}));
});

//Metodo GET con parametros, para consultar una noticia por su id
router.get("/noticia/:id", (req,res) => {
    const { id } = req.params;
    noticiaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//Metodo PUT, para modificar datos de una noticia por su id
router.put("/noticias/:id", (req,res) => {
    const { id } = req.params;
    const { titulo, contenido, autor, categoria, fuente, revisado, fechaPublicacion, fechaRegistroBD } = req.body;
    noticiaSchema
    .updateOne({ _id: id },{
        $set: { titulo, contenido, autor, categoria, fuente, revisado, fechaPublicacion, fechaRegistroBD}
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Metodo DELETE, para eliminar una noticia de la base de datos por su id
router.delete("/noticia/:id", (req,res) => {
    const { id } = req.params;
    noticiaSchema
    .findByIdAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));   
});

module.exports = router;