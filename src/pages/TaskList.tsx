import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TaskItem from "./TaskItem";
import { Task } from "../data/TodoData"; // Import Task type

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
  handleEditClick: (task: Task) => void;
  handleDeleteClick: (id: number) => void;
}

const TaskList = ({
  tasks,
  toggleTaskCompletion,
  handleEditClick,
  handleDeleteClick,
}: TaskListProps) => {
  return (
    <TableContainer component={Paper} style={{ marginTop: 20 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", padding: "12px" }}
            >
              TASK
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", padding: "12px" }}
            >
              STATUS
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", padding: "12px" }}
            >
              ACTIONS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTaskCompletion={toggleTaskCompletion}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            ))
          ) : (
            <TableRow>
              <TableCell align="center" colSpan={4}>
                No tasks found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskList;
