"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewDiaryEntry = void 0;
const types_1 = require("./types");
const parseConnet = (commentFrowRequest) => {
    if (!isString(commentFrowRequest)) {
        throw new Error("incorrecto el tipo de dato");
    }
    return commentFrowRequest;
};
const isString = (string) => {
    return typeof string != "string";
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error("Incorrect or missing date from request");
    }
    return dateFromRequest;
};
const isDate = (date) => {
    return typeof date === "string";
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error("Invalid weather in Strgin");
    }
    return weatherFromRequest;
};
const isWeather = (string) => {
    return Object.values(types_1.Weather).includes(string);
};
const parseVisibility = (visibilitiFromRequest) => {
    if (!isString(visibilitiFromRequest) ||
        !isVisibility(visibilitiFromRequest)) {
        throw new Error("Invalid visibility in Strgin");
    }
    return visibilitiFromRequest;
};
const isVisibility = (params) => {
    return Object.values(types_1.Visibility).includes(params);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseConnet(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
    };
    return newEntry;
};
exports.toNewDiaryEntry = toNewDiaryEntry;
