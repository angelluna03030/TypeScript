import { NoIdEntryInfoDiaryEntry, Visibility, Weather } from "./types";
const parseConnet = (commentFrowRequest: any): string => {
  if (!isString(commentFrowRequest)) {
    throw new Error("incorrecto el tipo de dato");
  }
  return commentFrowRequest;
};
const isString = (string: string): boolean => {
  return typeof string != "string";
};

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date from request");
  }
  return dateFromRequest;
};

const isDate = (date: string): boolean => {
  return typeof date === "string";
};
const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error("Invalid weather in Strgin");
  }
  return weatherFromRequest;
};
const isWeather = (string: any): boolean => {
  return Object.values(Weather).includes(string);
};
const parseVisibility = (visibilitiFromRequest: any): Visibility => {
  if (
    !isString(visibilitiFromRequest) ||
    !isVisibility(visibilitiFromRequest)
  ) {
    throw new Error("Invalid visibility in Strgin");
  }
  return visibilitiFromRequest;
};

const isVisibility = (params: any): boolean => {
  return Object.values(Visibility).includes(params);
};
export const toNewDiaryEntry = (object: any): NoIdEntryInfoDiaryEntry => {
  const newEntry: NoIdEntryInfoDiaryEntry = {
    comment: parseConnet(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };
  return newEntry;
};


