import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface TaskInputProps {
  newTask: string;
  setNewTask: (value: string) => void;
  addTask: () => void;
}

const TaskInput = ({ newTask, setNewTask, addTask }: TaskInputProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography
          variant="h5"
          color="info"
          gutterBottom
          fontWeight={"bold"}
          sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
        >
          CREATE TASK
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} md={10} lg={10} xl={8}>
        <Box>
          <TextField
            fullWidth
            placeholder="Create Task"
            required
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTask()}
            size="small"
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
          mt: { xs: 2, sm: 0 },
        }}
      >
        <Button
          variant="outlined"
          color="info"
          startIcon={<AddCircleOutlineIcon />}
          onClick={addTask}
          sx={{
            height: { xs: 40, md: 39 },
            width: "100%",
            fontSize: { xs: "0.8rem", md: "0.8rem" },
          }}
        >
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskInput;
