const express = require("express");
const controllerExercicios = require("../controller/exercicios.js");

//inicializar as rotas do express
const router = express.Router();

// Criando as rotas
router.get("/", controllerExercicios.GetExercicios);
router.post("/", controllerExercicios.CreateExercicios);
router.post("/exercicio4/", controllerExercicios.Graus);
router.post("/exercicio10/", controllerExercicios.Imc);
router.post("/exercicio17/", controllerExercicios.Nota);
router.post("/exercicio24/", controllerExercicios.Tabuada);
router.post("/exercicio15/", controllerExercicios.Triangulos);
router.put("/:id", controllerExercicios.UpdateExercicios);
router.delete("/:id", controllerExercicios.DeleteExercicios);

//Exportar as rotas
module.exports = router;
