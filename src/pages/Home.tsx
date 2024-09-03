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
import EditIcon from "@mui/icons-material/Edit";
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
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editTaskText, setEditTaskText] = useState<string>("");

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

  const handleEditClick = (task: Task) => {
    setEditTaskId(task.id);
    setEditTaskText(task.text);
  };

  const saveEdit = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editTaskId ? { ...task, text: editTaskText } : task
      )
    );
    setEditTaskId(null);
    setEditTaskText("");
  };

  const cancelEdit = () => {
    setEditTaskId(null);
    setEditTaskText("");
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
      <Grid container spacing={2}>
        {/* Stack the text field and button vertically on small devices */}
        <Grid item xs={12} sm={10} md={10} lg={10} xl={8}>
          <Box>
            <TextField
              fullWidth
              placeholder="Create New Task"
              required
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTask()}
              size="small" // Use small size for compactness
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
            justifyContent: { xs: "flex-start", sm: "center" },
            alignItems: "center",
            mt: { xs: 2, sm: 0 }, // Add margin-top on small devices for vertical spacing
          }}
        >
          <Button
            variant="contained"
            color="success"
            startIcon={<AddCircleOutlineIcon />}
            onClick={addTask}
            sx={{
              height: { xs: 40, md: 39 }, // Adjust height for smaller devices
              width: "100%",
              fontSize: { xs: "0.8rem", md: "1rem" }, // Adjust font size
            }}
          >
            Add Task
          </Button>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6} lg={6} xl={6}>
              <Typography
                gutterBottom
                variant="h6"
                fontWeight={400}
                mt={3}
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }} // Adjust font size
              >
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
              <Typography
                gutterBottom
                variant="h6"
                sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" } }} // Adjust font size
              >
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
                  size="small" // Make the select component smaller
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
                            size="small"
                          >
                            <Checkbox checked={task.completed} />
                          </IconButton>
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">
                          {editTaskId === task.id ? (
                            <TextField
                              fullWidth
                              value={editTaskText}
                              onChange={(e) => setEditTaskText(e.target.value)}
                              size="small" // Smaller text field for editing
                            />
                          ) : (
                            task.text
                          )}
                        </TableCell>
                        <TableCell align="center">
                          <Chip
                            label={task.completed ? "Completed" : "Incomplete"}
                            color={statusColor(task.completed)}
                            variant="outlined"
                            size="small" // Smaller chip size
                          />
                        </TableCell>
                        <TableCell align="center">
                          {editTaskId === task.id ? (
                            <>
                              <Button onClick={saveEdit} size="small">
                                Save
                              </Button>
                              <Button onClick={cancelEdit} size="small">
                                Cancel
                              </Button>
                            </>
                          ) : (
                            <>
                              <IconButton
                                edge="end"
                                aria-label="edit"
                                onClick={() => handleEditClick(task)}
                                size="small"
                              >
                                <EditIcon />
                              </IconButton>
                              <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => handleDeleteClick(task.id)}
                                size="small"
                              >
                                <DeleteIcon />
                              </IconButton>
                            </>
                          )}
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
