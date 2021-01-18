import DialogWidget from "./UI/components/DialogWidget/DialogWidget";
import GridSection from "./UI/components/GridSection/GridSection";
import React  from "react";

function App() {
  document.body.style.backgroundColor = '#282c34'
  return (
    <div >
      <GridSection></GridSection>
      <DialogWidget></DialogWidget>
    </div>
  );
}

export default App;
