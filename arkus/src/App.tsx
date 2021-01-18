import './App.scss'
import './App.scss'

import { IconButton, Typography } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import DialogWidget from "./UI/components/DialogWidget/DialogWidget";
import GridSection from "./UI/components/GridSection/GridSection";
import React from "react";
import useModal from "./lib/hooks/useModal";

function App() {
  document.body.style.backgroundColor = "#282c34";
  const { isVisible, toggle } = useModal();

  return (
    <>
      <Typography className="title" variant="h4">Arkus App</Typography>
      <GridSection></GridSection>
      <DialogWidget isOpen={isVisible} handleOpen={toggle}></DialogWidget>
      <IconButton onClick={toggle} className="button">
        <AddIcon></AddIcon>
      </IconButton>
    </>
  );
}

export default App;
