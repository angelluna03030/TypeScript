"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //EsModules
/*cosnt express = require('express') --> commonjs */
const diaryServices = __importStar(require("../services/diaryServices"));
const _ = __importStar(require(".."));
const utils_1 = require("../utils");
const routes = express_1.default.Router();
routes.get("/", (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});
routes.get("/:id", (req, res) => {
    const diary = _.finById(Number(req.params.id));
    return diary != null || undefined ? res.send(diary) : res.sendStatus(401);
});
routes.post("/", (req, res) => {
    try {
        const newDiaryEntry = (0, utils_1.toNewDiaryEntry)(req.body);
        const addDiaryEntry = diaryServices.addDiary(newDiaryEntry);
        res.json(addDiaryEntry);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.default = routes;
