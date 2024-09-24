import express from "express";  //EsModules
/*cosnt express = require('express') --> commonjs */
import * as diaryServices from "../services/diaryServices"
import * as _ from "..";

const routes = express.Router();
routes.get("/" ,(_req, res)=>{
res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

routes.get("/:id" ,(req, res)=>{
    const diary = _.finById(Number(req.params.id))
    return  diary != null || undefined ? res.send(diary) : res.sendStatus(401)

})
routes.post("/" ,(req, res)=>{
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body);
        const addDiaryEntry = diaryServices.addDiary({newDiaryEntry})
        res.json(addDiaryEntry);
    } catch (e) {
        res.status(400).send(e);
    }
 
})

export default routes