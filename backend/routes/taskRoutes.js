import express from "express";
import {
  addTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/taskController";

const router = express.Router();

// routes
router.get("/", getAllTasks);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:", deleteTask);

export default router;
