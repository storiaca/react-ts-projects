"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = require("../controllers/gameController");
const router = (0, express_1.Router)();
router.get("/", gameController_1.getAllGames);
router.post("/game", gameController_1.createGame);
exports.default = router;
