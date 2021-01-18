import "./App.css";

import AddDialog from "./UI/components/AddDialog/AddDialog";
import GridSection from "./UI/components/GridSection/GridSection";
import React  from "react";

function App() {
 

 
  return (
    <div className="App">
      <header className="App-header">
        <GridSection></GridSection>
        <AddDialog></AddDialog>
      </header>
    </div>
  );
}

export default App;
