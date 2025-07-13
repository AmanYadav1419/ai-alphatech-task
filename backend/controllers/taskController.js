import { readTasks, writeTask } from "../utils/fileHandler.js";

// function to get all the tasks
export const getAllTasks = (req, res) => {
  // get the task
  const tasks = readTasks();
  return res.status(200).json(tasks);
};

// function to add the task
export const addTask = (req, res) => {
  // first getting all the tasks which is present
  const tasks = readTasks();

  // create new task
  const newTask = {
    id: Date.now(),
    ...req.body,
    completed: false,
  };

  tasks.push(newTask);
  writeTask(tasks);
  return res.status(201).json(newTask);
};

// function to update the specific task
export const updateTask = (req, res) => {
  const tasks = readTasks();

  const id = parseInt(req.params.id);
  // find by index
  const index = tasks.findIndex((task) => task.id === id);

  // if index not found , then simply return task not found
  if (index === -1) return res.status(404).json({ message: "Task Not found" });

  tasks[index] = {...tasks[index], ...req.body};
  writeTask(tasks);
  res.status(200).json(tasks[index])
};

// function to delete the specific task
export const deleteTask = (req, res) => {
  const tasks = readTasks();
  const id = parseInt(req.params.id);
  const filteredTasks = tasks.filter(task => task.id !== id);

  writeTask(filteredTasks);
  res.status(204).send();
};
