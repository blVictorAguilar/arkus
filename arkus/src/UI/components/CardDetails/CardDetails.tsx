import './CardDetails.scss'

import { Button, IconButton } from '@material-ui/core';
import { deleteContact, deleteContactItem } from '../../../features/contact/ContactSlice';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { ContactItem } from '../../../features/types/types';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';

export default function CardDetails(props: {contact: ContactItem}) {

  const {id,first_name, last_name,email, avatar} = props.contact;
  const dispatch = useDispatch();
  
  function handleDelete(){
      dispatch(deleteContact(id!))
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
          <Typography  variant="h6" >
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
      <EditIcon onClick={handleDelete}></EditIcon>
      </IconButton>
      </div>
      </CardActions>
    </Card>
  );
}