import "./DialogWidget.scss";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  addContact,
  updateContact,
} from "../../../features/contact/ContactSlice";

import Button from "@material-ui/core/Button";
import { ContactItem } from "../../../features/types/types";
import { Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { DialogProps } from "./DialogWidget.model";
import DialogTitle from "@material-ui/core/DialogTitle";
import { InputWidget } from "../../atomic-elements/InputWidget/InputWidget";
import { useDispatch } from "react-redux";

export default function FormDialog({
  isOpen,
  handleOpen,
  actionType,
  contact,
}: DialogProps) {
  const dispatch = useDispatch();
  const titleLabel =
    actionType === "editable" ? "Edit Contact" : "Add New Contact";

  const [inputData, setInputData] = useState<any>({
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  useEffect(() => {
    if (actionType === "editable") setInputData(contact);
  }, []);

  function actionMapping(data: ContactItem) {
    switch (actionType) {
      case "editable":
        return dispatch(updateContact(contact?.id!, data));
      default:
        dispatch(addContact(data));
        setInputData({});
        break;
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const data = { ...inputData };
    data[event.target.id] = event.target.value;
    setInputData(data);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    actionMapping(inputData);
    handleOpen();
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
          <DialogTitle id="form-dialog-title">{titleLabel}</DialogTitle>
          <DialogContent>
            <InputWidget
              elementName="first_name"
              onInputChange={handleChange}
              inputLabel="First Name"
              defaultValue={inputData.first_name}
            ></InputWidget>
            <InputWidget
              elementName="last_name"
              onInputChange={handleChange}
              inputLabel="Last Name"
              defaultValue={inputData.last_name}
            ></InputWidget>
            <InputWidget
              elementName="email"
              onInputChange={handleChange}
              inputLabel="Email"
              defaultValue={inputData.email}
            ></InputWidget>
            <InputWidget
              elementName="avatar"
              onInputChange={handleChange}
              inputLabel="Image URL"
              defaultValue={inputData.avatar}
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
