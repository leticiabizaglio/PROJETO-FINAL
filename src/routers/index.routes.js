import { Router } from "express";
import rotaPersonagens from "./personagens.routes.js";
import casaRoutes from "./casas.routes.js";

const rotas = Router();

rotas.use("/personagens", rotaPersonagens);
rotas.use("/casas", casaRoutes);

rotas.get("/", (req, res) => {
    return res.status(200).send({ message: "O servidor está funcionando!" });
});

export default rotas;