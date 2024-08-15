import express from "express";
import { getAllNotes, addNote, deleteNote } from "../controllers/noteController.js";

const router = express.Router();

//Routes
router.get("/", getAllNotes);
router.post("/add", addNote);
router.delete("/note/:id", deleteNote);

export default router;