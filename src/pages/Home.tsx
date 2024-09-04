import { useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import TaskInput from "./TaskInput";
import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";
import EditTaskDialog from "./EditTaskDialog";
import DeleteTaskDialog from "./DeleteTaskDialog";
import { Task, TodoData } from "../data/TodoData";

const Home = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(TodoData);
  const [filter, setFilter] = useState<string>("all");

  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editTaskText, setEditTaskText] = useState<string>("");

  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);

  // Task operations: add, edit, delete, toggle
  const addTask = () => {
    if (newTask.trim()) {
      const newTaskItem: Task = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
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

  const handleEditClick = (task: Task) => {
    setEditTaskId(task.id);
    setEditTaskText(task.text);
    setOpenEditDialog(true);
  };

  const saveEdit = () => {
    if (editTaskId !== null) {
      setTasks(
        tasks.map((task) =>
          task.id === editTaskId ? { ...task, text: editTaskText } : task
        )
      );
      setEditTaskId(null);
      setEditTaskText("");
      setOpenEditDialog(false);
    }
  };

  const handleDeleteClick = (id: number) => {
    setDeleteTaskId(id);
    setOpenDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (deleteTaskId !== null) {
      setTasks(tasks.filter((task) => task.id !== deleteTaskId));
      setDeleteTaskId(null);
      setOpenDeleteDialog(false);
    }
  };

  const cancelDelete = () => {
    setDeleteTaskId(null);
    setOpenDeleteDialog(false);
  };

  const cancelEdit = () => {
    setEditTaskId(null);
    setEditTaskText("");
    setOpenEditDialog(false);
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
        <Grid item xs={12}>
          <TaskInput
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        </Grid>
        <Grid item xs={12}>
          <TaskFilter filter={filter} setFilter={setFilter} />
        </Grid>
        <Grid item xs={12}>
          <TaskList
            tasks={tasks}
            toggleTaskCompletion={toggleTaskCompletion}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        </Grid>
      </Grid>

      <EditTaskDialog
        open={openEditDialog}
        editTaskText={editTaskText}
        setEditTaskText={setEditTaskText}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />

      <DeleteTaskDialog
        open={openDeleteDialog}
        confirmDelete={confirmDelete}
        cancelDelete={cancelDelete}
      />
    </Box>
  );
};

export default Home;
