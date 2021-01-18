import "./DialogWidget.scss";

import React, { ChangeEvent, FormEvent, useState } from "react";

import Button from "@material-ui/core/Button";
import { Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { DialogProps } from "./DialogWidget.model";
import DialogTitle from "@material-ui/core/DialogTitle";
import { InputWidget } from "../../atomic-elements/InputWidget/InputWidget";
import { addContact } from "../../../features/contact/ContactSlice";
import { useDispatch } from "react-redux";

export default function FormDialog({ isOpen, handleOpen }: DialogProps) {
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState<any>({
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const data = inputData;
    data[event.target.id] = event.target.value;
    setInputData(data);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(addContact(inputData));
  }

  return (
    <div>
      <Dialog
        className="dialog"
        open={isOpen}
        onClose={handleOpen}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Add New Contact</DialogTitle>
          <DialogContent>
            <InputWidget
              elementName="first_name"
              onInputChange={handleChange}
              inputLabel="First Name"
              defaultValue="First Name"
            ></InputWidget>
            <InputWidget
              elementName="last_name"
              onInputChange={handleChange}
              inputLabel="Last Name"
              defaultValue="Last Name"
            ></InputWidget>
            <InputWidget
              elementName="email"
              onInputChange={handleChange}
              inputLabel="Email"
              defaultValue="Email"
            ></InputWidget>
            <InputWidget
              elementName="avatar"
              onInputChange={handleChange}
              inputLabel="Image URL"
              defaultValue="http://www.example.com/image"
            ></InputWidget>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleOpen}>
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
