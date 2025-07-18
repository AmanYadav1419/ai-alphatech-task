import {
  Table, TableHead, TableRow, TableCell, TableBody,
  Checkbox, IconButton, Chip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Task } from '@/types/task';


export default function TaskList({
  tasks, onEdit, onDelete, onToggle
}: {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
  onToggle: (task: Task) => void;
}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Status</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>
              <Checkbox
                checked={task.completed}
                onChange={() => onToggle(task)}
              />
              {task.completed && <Chip label="Done" color="success" size="small" />}
            </TableCell>
            <TableCell sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>
              <IconButton onClick={() => onEdit(task)}><EditIcon /></IconButton>
              <IconButton onClick={() => onDelete(task.id)}><DeleteIcon /></IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
