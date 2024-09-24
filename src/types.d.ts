export type  Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
export type Visibility = 'gread' | 'good' | 'ok'| 'poor'

export enum Weather {
    Sunny= 'sunny',
    R= 'sunny',
    Sunny= 'sunny',
    Sunny= 'sunny',


}

export interface DiaryEntry {
    id: number,
    date : string,
    weather : Weather,
    visibility : Visibility,
    comment : string
}
//export type NonDiaryEntryInfoDiaryEntry = Pick<DiaryEntry, 'id' | "deta" | "visibility" | "weather", >


export type NonDiaryEntryInfoDiaryEntry = Omit<DiaryEntry ,'comment'>


export type NoIdEntryInfoDiaryEntry = Omit<DiaryEntry ,'id'>




