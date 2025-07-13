import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../tasks.json");

// function to read the tasks from the file
export const readTasks = () => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");

    // return this data into json by parsing it
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// function to write the tasks to the file
export const writeTask = (task) => {
  fs.writeFileSync(filePath, JSON.parse(task, null, 2), "utf-8");
};
