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
import TaskItem, { CustomTableCell, CustomTableRow } from "./TaskItem";
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
    <TableContainer component={Paper}>
      <Table>
        <TableHead
          sx={{
            backgroundColor: "#0289d1",
            Color: "#FFF",
          }}
        >
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
            <CustomTableRow>
              <CustomTableCell align="center" colSpan={4}>
                <img src={NoList} width={200} height={300} />
                <Typography variant="h6" gutterBottom>
                  No Task Found
                </Typography>
              </CustomTableCell>
            </CustomTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskList;
