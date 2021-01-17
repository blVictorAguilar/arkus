import React, { Component } from 'react'
import { addContact, deleteContact, updateContact } from '../../../features/contact/ContactSlice';
import { useDispatch, useSelector } from "react-redux";

import Button from '@material-ui/core/Button';
import { Dialog } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { InputWidget } from '../../atomic-elements/InputWidget/InputWidget';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={()=>dispatch(updateContact(4, {
          email: 'george.bluth@reqres.in',
          first_name: 'Blashyrkh',
          last_name: 'Bluth',
          avatar: 'https://reqres.in/img/faces/1-image.jpg'
        }))}>
          Update
        </Button>
        <Button variant="outlined" color="primary" onClick={()=>dispatch(deleteContact(2))}>
          Open form dialog
        </Button>
        <Button variant="outlined" color="primary" onClick={()=>dispatch(deleteContact(2))}>
          Delete
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
            <InputWidget inputValue="test" inputLabel="First Name" defaultValue="First Name"></InputWidget>
            <InputWidget inputValue="test" inputLabel="Last Name" defaultValue="Last Name"></InputWidget>
            <InputWidget inputValue="test" inputLabel="Email" defaultValue="Email"></InputWidget>

          </DialogContent>
          <DialogActions>
            <Button color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  