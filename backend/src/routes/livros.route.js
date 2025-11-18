
import { Router } from "express";
import livrosController from "../controllers/livros.controller.js";
const livrosRouter = Router();

livrosRouter.post("/registrarLivro", livrosController.registrarLivro);
livrosRouter.get("/todosLivros", livrosController.todosLivros);
livrosRouter.get("/livrosLidos", livrosController.livrosLidos);
livrosRouter.get("/livrosNFinalizados", livrosController.livrosNFinalizados);
livrosRouter.get("/dataAnoMes", livrosController.dataAnoMes);


// livrosRouter .put("/updateEncontro/:id", encontrosController.updateEncontroById);
// livrosRouter .delete("/deleteEncontro/:id", encontrosController.deleteEncontroById);

export default livrosRouter;