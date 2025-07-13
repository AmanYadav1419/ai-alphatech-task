import express from "express";
import {
  addTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/taskController.js";

const router = express.Router();

// routes
router.get("/", getAllTasks);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
