import "./CardDetails.scss";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { ContactItem } from "../../../features/types/types";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogWidget from "../DialogWidget/DialogWidget";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { deleteContact } from "../../../features/contact/ContactSlice";
import { useDispatch } from "react-redux";
import useModal from "../../../lib/hooks/useModal";

export default function CardDetails(props: { contact: ContactItem }) {
  const { id, first_name, last_name, email, avatar } = props.contact;

  const { isVisible, toggle } = useModal();

  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteContact(id!));
  }

  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="card-media"
          src={avatar}
          component="img"
          height={230}
          alt={first_name}
        />
        <CardContent>
          <Typography variant="h6">
            {first_name} {last_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>
          <IconButton>
            <DeleteIcon onClick={handleDelete}></DeleteIcon>
          </IconButton>
          <IconButton>
            <EditIcon onClick={toggle}></EditIcon>
          </IconButton>
        </div>
      </CardActions>
      <DialogWidget
        isOpen={isVisible}
        handleOpen={toggle}
        actionType="editable"
        contact={props.contact}
      ></DialogWidget>
    </Card>
  );
}
