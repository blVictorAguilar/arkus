import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { ContactItem } from '../../../features/types/types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CardDetails(props: {contact: ContactItem}) {
  const classes = useStyles();

  const {id,first_name, last_name,email, avatar} = props.contact;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
           src={avatar}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          title="Contemplative Reptile"
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

      </CardActions>
    </Card>
  );
}