import {
  Checkbox,
  Chip,
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "../data/TodoData"; // Import Task type

interface TaskItemProps {
  task: Task;
  toggleTaskCompletion: (id: number) => void;
  handleEditClick: (task: Task) => void;
  handleDeleteClick: (id: number) => void;
}

const TaskItem = ({
  task,
  toggleTaskCompletion,
  handleEditClick,
  handleDeleteClick,
}: TaskItemProps) => {
  const statusColor = task.completed ? "success" : "error";

  return (
    <TableRow>
      <TableCell align="center" padding="checkbox">
        <IconButton
          edge="end"
          aria-label="toggle"
          onClick={() => toggleTaskCompletion(task.id)}
          size="small"
        >
          <Checkbox checked={task.completed} />
        </IconButton>
      </TableCell>
      <TableCell align="center" sx={{ padding: "12px" }}>
        {task.text}
      </TableCell>
      <TableCell align="center" sx={{ padding: "12px" }}>
        <Chip
          label={task.completed ? "Completed" : "Incomplete"}
          color={statusColor}
          variant="outlined"
          size="small"
        />
      </TableCell>
      <TableCell align="center" sx={{ padding: "12px" }}>
        <Tooltip title="Edit">
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => handleEditClick(task)}
            size="large"
          >
            <EditIcon color="success" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDeleteClick(task.id)}
            size="large"
          >
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default TaskItem;
