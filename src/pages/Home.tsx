import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodoData } from "../data/TodoData";
import { Chip } from "@mui/material";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>(TodoData);
  const [newTask, setNewTask] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const addTask = () => {
    if (newTask.trim()) {
      const newTaskItem = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, newTaskItem]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteClick = (id: number) => {
    setTaskToDelete(id);
    setOpenDialog(true);
  };

  const confirmDelete = () => {
    if (taskToDelete !== null) {
      setTasks(tasks.filter((task) => task.id !== taskToDelete));
      setTaskToDelete(null);
    }
    setOpenDialog(false);
  };

  const cancelDelete = () => {
    setTaskToDelete(null);
    setOpenDialog(false);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });
  const statusColor = (completed: boolean) => {
    return completed ? "success" : "error"; // MUI colors for success (green) and error (red)
  };
  return (
    <Box
      component={Paper}
      elevation={1}
      sx={{
        height: "auto",
        p: { xs: 2, md: 3 },
        m: { xs: 2, md: 3 },
      }}
    >
      <Typography gutterBottom variant="h5" fontWeight={400} mt={3}>
        Create New Task
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={10} md={10} lg={10} xl={8}>
          <Box>
            <TextField
              fullWidth
              label="New Task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTask()}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          lg={2}
          xl={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
            onClick={addTask}
            sx={{
              height: { xs: 48, md: 56 },
              width: "100%",
            }}
          >
            ADD Item
          </Button>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6} lg={6} xl={6}>
              <Typography gutterBottom variant="h5" fontWeight={400} mt={3}>
                Task List
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              lg={6}
              xl={6}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography gutterBottom variant="h6">
                Status:
              </Typography>
              <FormControl
                fullWidth
                sx={{
                  m: 2,
                }}
              >
                <InputLabel id="filter-label"></InputLabel>
                <Select
                  labelId="filter-label"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                  <MenuItem value="incomplete">Incomplete</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <TableContainer component={Paper} style={{ marginTop: 20 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">Task</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell align="center">
                          <IconButton
                            edge="end"
                            aria-label="toggle"
                            onClick={() => toggleTaskCompletion(task.id)}
                          >
                            <Checkbox checked={task.completed} />
                          </IconButton>
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">
                          {task.text}
                        </TableCell>
                        <TableCell align="center">
                          <Chip
                            label={task.completed ? "Completed" : "Incomplete"}
                            color={statusColor(task.completed)}
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => handleDeleteClick(task.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        No tasks available
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={openDialog}
        onClose={cancelDelete}
        aria-labelledby="confirm-dialog-title"
      >
        <DialogTitle id="confirm-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this task?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete}>Cancel</Button>
          <Button onClick={confirmDelete} color="error">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Home;
