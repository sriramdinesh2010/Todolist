import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import TaskItem from "./TaskItem";
import { Task } from "../data/TodoData"; // Import Task type
import NoList from "../assets/nolist.svg";
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
              sx={{ fontWeight: "bold", padding: "12px", color: "#1975d1" }}
            >
              TASK
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", padding: "12px", color: "#1975d1" }}
            >
              STATUS
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", padding: "12px", color: "#1975d1" }}
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
                <img src={NoList} width={200} height={300} />
                <Typography variant="h6" gutterBottom>
                  No Task Found
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskList;
