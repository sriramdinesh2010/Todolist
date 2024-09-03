import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodoData } from "../data/TodoData";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoListApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(TodoData);
  const [newTask, setNewTask] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");

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

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "20px" }}>
      <div style={{ marginTop: 20 }}>
        <TextField
          fullWidth
          label="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTask}
          style={{ marginTop: 10 }}
        >
          Add Task
        </Button>
      </div>

      <div style={{ marginTop: 20 }}>
        <FormControl fullWidth>
          <InputLabel id="filter-label">Filter Tasks</InputLabel>
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
      </div>

      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </TableCell>
                <TableCell align="center">
                  {task.completed ? "Completed" : "Incomplete"}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    edge="end"
                    aria-label="toggle"
                    onClick={() => toggleTaskCompletion(task.id)}
                  >
                    <Checkbox checked={task.completed} />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TodoListApp;
