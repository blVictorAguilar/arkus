import "./App.css";

import React, { useEffect } from "react";
import { contactSelector, getContacts } from "./features/contact/ContactSlice";
import { useDispatch, useSelector } from "react-redux";

import AddDialog from "./UI/components/AddDialog/AddDialog";
import CardDetails from "./UI/components/CardDetails/CardDetails";
import add from "./assets/icons/add.svg";

function App() {
  const dispatch = useDispatch();
  const { contacts, loading, errors } = useSelector(contactSelector);
  console.log('contacts: ', contacts);

  useEffect(() => {
    dispatch(getContacts());

  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={add} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AddDialog></AddDialog>
        <CardDetails></CardDetails>
        <CardDetails></CardDetails>
        <CardDetails></CardDetails>
        <CardDetails></CardDetails>
      </header>
    </div>
  );
}

export default App;
