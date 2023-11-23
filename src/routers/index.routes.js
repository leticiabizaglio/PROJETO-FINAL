import { Router } from "express";
import rotaPersonagens from "./personagens.routes.js";
import casaRoutes from "./casas.routes.js";
import rotasVarinhas from "./varinhas.routes.js";
import rotaSobrenos from "./sobrenos.routes.js";

const rotas = Router();

rotas.use("/personagens", rotaPersonagens);
rotas.use("/casas", casaRoutes);
rotas.use("/varinhas", rotasVarinhas);
rotas.use("/sobrenos", rotaSobrenos);


rotas.get("/", (req, res) => {
    return res.status(200).send({ message: "O servidor está funcionando!" });
});

export default rotas;