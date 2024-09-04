import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  InputLabel,
} from "@mui/material";

interface EditTaskDialogProps {
  open: boolean;
  editTaskText: string;
  setEditTaskText: (value: string) => void;
  saveEdit: () => void;
  cancelEdit: () => void;
}

const EditTaskDialog = ({
  open,
  editTaskText,
  setEditTaskText,
  saveEdit,
  cancelEdit,
}: EditTaskDialogProps) => {
  return (
    <Dialog open={open} fullWidth onClose={cancelEdit}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <InputLabel>Change Task</InputLabel>
        <TextField
          autoFocus
          margin="dense"
          fullWidth
          value={editTaskText}
          onChange={(e) => setEditTaskText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelEdit}>Cancel</Button>
        <Button onClick={saveEdit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskDialog;
