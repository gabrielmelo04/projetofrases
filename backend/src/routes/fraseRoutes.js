const router = require("express").Router();
const FraseController = require("../controllers/FraseController");

//Rotas
router.post("/criar", FraseController.criar);

router.get("/listar", FraseController.listarTodos);

router.get("/listar/:id", FraseController.listar);

router.put("/atualizar/:id", FraseController.atualizar);

router.delete("/deletar/:id", FraseController.deletar);

module.exports = router;