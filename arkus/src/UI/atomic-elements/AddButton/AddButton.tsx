import { IconButton, createStyles, makeStyles } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import React from "react";

export default function AddButton(props: { toggle: () => any }) {
  const useStyles = makeStyles(() =>
    createStyles({
      button: {
        background: "#63c2d8e0",
        flex: 1,
        float: "right",
        marginRight: "50px",
      },
    })
  );

  const styles = useStyles();
  return (
    <IconButton onClick={props.toggle} className={styles.button}>
      <AddIcon></AddIcon>
    </IconButton>
  );
}
