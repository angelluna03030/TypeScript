"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //EsModules
/*cosnt express = require('express') --> commonjs */
const routes = express_1.default.Router();
routes.get("/", (_req, res) => {
    res.send("Welcome My API");
});
routes.post("/", (_req, res) => {
    res.send("Welcome My API, my POST");
});
exports.default = routes;
