import {
  Dialog, DialogTitle, DialogContent, TextField,
  DialogActions, Button
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Task } from '@/types/task';

export default function TaskForm({
  open, handleClose, handleSave, initialData
}: {
  open: boolean;
  handleClose: () => void;
  handleSave: (task: Partial<Task>) => void;
  initialData?: Task | null;
}) {
  const [task, setTask] = useState<Partial<Task>>({ title: '', description: '' });

  useEffect(() => {
    if (initialData) setTask(initialData);
    else setTask({ title: '', description: '' });
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{initialData ? 'Edit Task' : 'Add Task'}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="title"
          label="Title"
          fullWidth
          value={task.title}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          fullWidth
          value={task.description}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleSave(task)}>{initialData ? 'Update' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
}
