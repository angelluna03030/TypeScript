"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finById = void 0;
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const diaryServices_1 = require("./services/diaryServices");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get("/ping", (_, res) => {
    console.log("alguien a hacho una peticion...");
    res.send("pong");
});
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, () => {
    console.log("servidor esta corriendo en el puerto 3000");
});
const finById = (id) => {
    const entry = diaryServices_1.diaries.find(d => d.id == id);
    if (entry != null) {
        const { comment } = entry, restOfDiary = __rest(entry, ["comment"]);
        return restOfDiary;
    }
    return undefined;
};
exports.finById = finById;
