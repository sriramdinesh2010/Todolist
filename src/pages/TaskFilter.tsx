import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

interface TaskFilterProps {
  filter: string;
  setFilter: (value: string) => void;
}

const TaskFilter = ({ filter, setFilter }: TaskFilterProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography
          gutterBottom
          variant="h6"
          fontWeight={400}
          mt={3}
          sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
        >
          Task List
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" } }}
        >
          Status:
        </Typography>
        <FormControl fullWidth sx={{ m: 2 }}>
          <InputLabel id="filter-label"></InputLabel>
          <Select
            labelId="filter-label"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            size="small"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="incomplete">Incomplete</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default TaskFilter;
