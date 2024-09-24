"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntries = void 0;
const diaryData_json_1 = __importDefault(require("./diaryData.json"));
const diaries = diaryData_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const addEntry = () => null;
exports.addEntry = addEntry;
