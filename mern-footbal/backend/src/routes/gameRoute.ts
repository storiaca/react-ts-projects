import { Router } from "express";
import { getAllGames, createGame } from "../controllers/gameController";

const router: Router = Router();

router.get("/", getAllGames);
router.post("/game", createGame);

export default router;
