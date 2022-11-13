const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const porta = 3600;
const dbNome = "frases"

app.use(express.json());
app.use(cors());

const fraseRouter = require("./routes/fraseRoutes");

//Rotas
app.use("/api/frases", fraseRouter);

//Conexao mongodb
mongoose.connect(
    `mongodb://localhost/${dbNome}`, {useNewUrlParser: true, useUnifiedTopology: true}
);

app.listen(porta, () => {
    console.log("Servidor Rodando...");
});