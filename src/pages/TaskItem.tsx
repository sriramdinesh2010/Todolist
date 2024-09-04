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
import { styled } from "@mui/material/styles";

export const CustomTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

export const CustomTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));
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
    <CustomTableRow>
      <CustomTableCell padding="checkbox">
        <IconButton
          edge="end"
          aria-label="toggle"
          onClick={() => toggleTaskCompletion(task.id)}
          size="small"
        >
          <Checkbox checked={task.completed} color="success" />
        </IconButton>
      </CustomTableCell>
      <CustomTableCell
        align="left"
        sx={{ padding: "12px", fontWeight: { xs: "bold", md: "bold" } }}
      >
        {task.text}
      </CustomTableCell>
      <CustomTableCell align="center" sx={{ padding: "12px" }}>
        <Chip
          label={task.completed ? "Completed" : "Incomplete"}
          color={statusColor}
          variant="outlined"
          size="small"
        />
      </CustomTableCell>
      <CustomTableCell
        align="left"
        sx={{
          padding: "12px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Tooltip title="Edit" placement="right-start">
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => handleEditClick(task)}
            size="large"
          >
            <EditIcon sx={{ color: "#808080" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" placement="right-start">
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDeleteClick(task.id)}
            size="large"
          >
            <DeleteIcon sx={{ color: "#808080" }} />
          </IconButton>
        </Tooltip>
      </CustomTableCell>
    </CustomTableRow>
  );
};

export default TaskItem;
