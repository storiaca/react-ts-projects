"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGame = exports.getAllGames = void 0;
const Game_1 = __importDefault(require("../models/Game"));
const getAllGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield Game_1.default.find();
    try {
        return res.status(200).json(games);
    }
    catch (error) {
        return res.status(500).json({ err: error });
    }
});
exports.getAllGames = getAllGames;
const createGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameToCreate = yield Game_1.default.create(req.body);
    try {
        return res.status(201).json(gameToCreate);
    }
    catch (error) {
        return res.status(500).json({ msg: "Couldn't create the game" });
    }
});
exports.createGame = createGame;
