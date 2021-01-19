import "./App.scss";

import AddButton from "./UI/atomic-elements/AddButton/AddButton";
import DialogWidget from "./UI/components/DialogWidget/DialogWidget";
import GridSection from "./UI/components/GridSection/GridSection";
import React from "react";
import { Typography } from "@material-ui/core";
import useModal from "./lib/hooks/useModal";

function App() {
  document.body.style.backgroundColor = "#282c34";
  const { isVisible, toggle } = useModal();

  return (
    <>
      <Typography className="title" variant="h4">
        Arkus App
      </Typography>
      <GridSection></GridSection>
      <DialogWidget isOpen={isVisible} handleOpen={toggle}></DialogWidget>
      <AddButton toggle={toggle}></AddButton>
    </>
  );
}

export default App;
