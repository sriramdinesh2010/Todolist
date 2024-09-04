import {
  Dialog,
  DialogActions,
  Button,
  DialogContent,
  DialogContentText,
  Slide,
  DialogTitle,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

interface DeleteTaskDialogProps {
  open: boolean;
  confirmDelete: () => void;
  cancelDelete: () => void;
}

//transition setup
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} appear />;
});

const DeleteTaskDialog = ({
  open,
  confirmDelete,
  cancelDelete,
}: DeleteTaskDialogProps) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      fullWidth
      onClose={cancelDelete}
    >
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this task?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelDelete}>Cancel</Button>
        <Button onClick={confirmDelete} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTaskDialog;
