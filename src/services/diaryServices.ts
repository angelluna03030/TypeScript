import { DiaryEntry , NonDiaryEntryInfoDiaryEntry,NoIdEntryInfoDiaryEntry} from "../types";
import diaryData from "./diaryData.json";
export const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = () => diaries;

export const getEntriesWithoutSensitiveInfo = ():NonDiaryEntryInfoDiaryEntry[]=>{
    return diaries.map(({id,date,weather, visibility})=>{
        return {id,date,weather,visibility}
    })

}


export const diariesWithSensitiveInfo = getEntriesWithoutSensitiveInfo();

export const addDiary = (newDiaryEntry : NoIdEntryInfoDiaryEntry):
 DiaryEntry => {
const newDiary ={
id: diaries.length +1,
...newDiaryEntry

}
diaries.push(newDiary);
return newDiary;
};