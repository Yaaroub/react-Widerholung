import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
const db = new Low(new JSONFile("data/data.json"))
export const getAllPhotos= async (req,res)=>{
    await db.read()
    res.json(db.data.photos)
}
export const getPhotos= async (req,res)=>{
    await db.read()
    res.json(db.data.photos)
}