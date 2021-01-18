import React, {
  ChangeEvent,
  FormEvent,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import { Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { InputWidget } from "../../atomic-elements/InputWidget/InputWidget";
import { addContact } from "../../../features/contact/ContactSlice";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(addContact(
      {
        email: 'george.bluth@reqres.in',
        first_name: 'Blashyrkh',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg'
      }
    ))
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        open
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Add New Contact</DialogTitle>
          <DialogContent>
            <InputWidget
              onInputChange={handleChange}
              inputLabel="First Name"
              defaultValue="First Name"
            ></InputWidget>
            <InputWidget
              onInputChange={handleChange}
              inputLabel="Last Name"
              defaultValue="Last Name"
            ></InputWidget>
            <InputWidget
              onInputChange={handleChange}
              inputLabel="Email"
              defaultValue="Email"
            ></InputWidget>
            <InputWidget
              onInputChange={handleChange}
              inputLabel="Image URL"
              defaultValue="http://www.example.com/image"
            ></InputWidget>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>Cancel</Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
