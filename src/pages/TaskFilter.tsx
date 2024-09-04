import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

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
          fontWeight={700}
          color="primary"
          sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
        >
          TASK LIST
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
          fontWeight={300}
          sx={{
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FilterListIcon sx={{ mr: 0.5 }} />
          Filter
        </Typography>
        <FormControl fullWidth sx={{ ml: 2 }}>
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
