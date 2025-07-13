'use client';

import { useEffect, useState } from 'react';
import { Container, Typography, Button, Snackbar, Alert } from '@mui/material';
import { Task } from '@/types/task';
import {
  getTasks, createTask, updateTask, deleteTask
} from '@/lib/api';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import SearchBox from '@/components/SearchBox';
import { useDebounce } from '@/hooks/useDebounce';

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });
  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const result = tasks.filter(t =>
      t.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setFilteredTasks(result);
  }, [debouncedSearch, tasks]);

  const fetchData = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleSave = async (task: Partial<Task>) => {
    if (selectedTask) {
      await updateTask(selectedTask.id, task);
      showSnackbar('Task updated!');
    } else {
      await createTask(task);
      showSnackbar('Task added!');
    }
    setOpenForm(false);
    fetchData();
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    showSnackbar('Task deleted!');
    fetchData();
  };

  const handleToggle = async (task: Task) => {
    await updateTask(task.id, { ...task, completed: !task.completed });
    fetchData();
  };

  const showSnackbar = (message: string, severity: 'success' | 'error' = 'success') => {
    setSnack({ open: true, message, severity });
  };

  return (
    <Container className="mt-5">
      <Typography variant="h4" gutterBottom>Task Management</Typography>
      <Button variant="contained" onClick={() => { setSelectedTask(null); setOpenForm(true); }}>Add Task</Button>
      <SearchBox value={search} onChange={setSearch} />
      <TaskList
        tasks={filteredTasks}
        onEdit={(task) => { setSelectedTask(task); setOpenForm(true); }}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
      <TaskForm
        open={openForm}
        handleClose={() => setOpenForm(false)}
        handleSave={handleSave}
        initialData={selectedTask}
      />
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack(prev => ({ ...prev, open: false }))}
      >
        <Alert severity={snack.severity}>{snack.message}</Alert>
      </Snackbar>
    </Container>
  );
}
