"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.diariesWithSensitiveInfo = exports.getEntriesWithoutSensitiveInfo = exports.getEntries = exports.diaries = void 0;
const diaryData_json_1 = __importDefault(require("./diaryData.json"));
exports.diaries = diaryData_json_1.default;
const getEntries = () => exports.diaries;
exports.getEntries = getEntries;
const getEntriesWithoutSensitiveInfo = () => {
    return exports.diaries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
exports.diariesWithSensitiveInfo = (0, exports.getEntriesWithoutSensitiveInfo)();
const addDiary = (newDiaryEntry) => {
    const newDiary = Object.assign({ id: exports.diaries.length + 1 }, newDiaryEntry);
    exports.diaries.push(newDiary);
    return newDiary;
};
exports.addDiary = addDiary;
