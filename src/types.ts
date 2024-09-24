
export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Windy = "windy",
  Stormy = "stormy",
}
export enum Visibility {
    Gread = "gread",
    Good = "good",
    Ok = "ok",
    Poor = "poor",
  }
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}
//export type NonDiaryEntryInfoDiaryEntry = Pick<DiaryEntry, 'id' | "deta" | "visibility" | "weather", >

export type NonDiaryEntryInfoDiaryEntry = Omit<DiaryEntry, "comment">;

export type NoIdEntryInfoDiaryEntry = Omit<DiaryEntry, "id">;
