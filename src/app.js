require("dotenv").config();
console.log("Archivo .env cargado. URI:", process.env.MONGO_URI);

const parser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000; 
const mongoose = require("mongoose");



const userRoutes = require("./routes/userRoutes");

app.use(parser.urlencoded({ extended: false })); 
app.use(parser.json()); 

app.use("/api", userRoutes);
app.use(express.json());
console.log("URI detectada:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((error) => console.log("Error al conectar MongoDB:", error));


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
