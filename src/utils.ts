import {NoIdEntryInfoDiaryEntry, Weather} from "./types"
const parseConnet = (commentFrowRequest : any): string =>{
    if(!isString( commentFrowRequest )){
        throw new Error("incorrecto el tipo de dato")
    }
    return commentFrowRequest
}
const isString= (string:string): boolean =>{
    return typeof string === "string"

}

const parseDate=(dateFromRequest: any): string =>
    {

       if (!isString(dateFromRequest) ||!isDate(dateFromRequest)) {
        throw new Error("Incorrect or missing date from request")
        
       }
       return dateFromRequest
    }

const isDate=(date : string): boolean =>{
    return typeof date === "string"
}
const parseWeather = (weatherFromRequest : any) : Weather=>{
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error("Invalid weather in Strgin")
    }
    return weatherFromRequest;
}


const isWeather =(string:string) : boolean=>{
return ['sunny' , 'rainy' , 'cloudy' ,'windy' , 'stormy'].includes(string)
}
const toNewDiaryEntry= (object : any): NoIdEntryInfoDiaryEntry=>{
const newEntry : NoIdEntryInfoDiaryEntry={
comment:parseConnet(object.comment),
date: parseDate(object.date),

}
return newEntry
}
