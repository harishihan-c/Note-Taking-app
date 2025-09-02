import express from "express";
import {
  getNote,
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
} from "../controllers/noteControler.js";

const router = express.Router();

router.get("/", getNote);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
