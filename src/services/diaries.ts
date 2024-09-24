import { DiaryEntry, Weather,Visibility } from "../types";


export const diaryData : Array<DiaryEntry> = [
    {
        "id": 1,
        "date": "2017-01-01",
        "weather": Weather.Rainy,
        "visibility": Visibility.Good,
        "comment": "etsa muy buena, gracias"
    },
    {
        "id": 2,
        "date": "2017-01-01",
        "weather": Weather.Sunny,
        "visibility": Visibility.Ok,
        "comment": "etsa muy buena, gracias"
    }
]
