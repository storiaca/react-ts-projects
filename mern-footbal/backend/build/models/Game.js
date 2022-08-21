"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GameSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    numberOfPeople: { type: Number, required: true },
    date: { type: Date, required: true },
    fieldNumber: { type: Number, required: true },
});
exports.default = (0, mongoose_1.model)("Game", GameSchema);
