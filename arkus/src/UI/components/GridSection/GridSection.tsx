import React, { useEffect } from "react";
import {
  contactSelector,
  getContacts,
} from "../../../features/contact/ContactSlice";
import { useDispatch, useSelector } from "react-redux";

import CardDetails from "../CardDetails/CardDetails";
import { Grid } from "@material-ui/core";

export default function GridSection() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(contactSelector);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Grid container spacing={10}>
      {contacts.map((item, i) => (
          <div key={item.id}>
              <CardDetails contact={item}></CardDetails>
          </div>
      ))}
    </Grid>
  );
}
