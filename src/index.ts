import express from "express";
import diaryRoutes from "./routes/diaries"
import { diaries } from "./services/diaryServices";
import { NonDiaryEntryInfoDiaryEntry } from "./types";
const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/ping", (_, res) => {   
  console.log("alguien a hacho una peticion...");
  res.send("pong");
});
app.use('/api/diaries', diaryRoutes)
app.listen(PORT, () => {
  console.log("servidor esta corriendo en el puerto 3000");
});
export const finById = (id: number): NonDiaryEntryInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id == id);
    if (entry != null) {
        const { comment, ...restOfDiary } = entry;
        return restOfDiary;
    }
    return undefined;

};
