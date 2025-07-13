import axios from 'axios';
import { Task } from '@/types/task';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/tasks';

export const getTasks = async () => axios.get<Task[]>(BASE_URL);
export const createTask = async (task: Partial<Task>) => axios.post(BASE_URL, task);
export const updateTask = async (id: number, task: Partial<Task>) => axios.put(`${BASE_URL}/${id}`, task);
export const deleteTask = async (id: number) => axios.delete(`${BASE_URL}/${id}`);
