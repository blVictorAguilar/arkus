import { Grid, LinearProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import {
  contactSelector,
  getContacts,
} from "../../../features/contact/ContactSlice";
import { useDispatch, useSelector } from "react-redux";

import CardDetails from "../CardDetails/CardDetails";

export default function GridSection() {
  const dispatch = useDispatch();
  const { contacts, loading } = useSelector(contactSelector);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {loading && <LinearProgress color="primary" />}
      <Grid container>
        {contacts.map((item) => (
          <div key={item.id}>
            <CardDetails contact={item}></CardDetails>
          </div>
        ))}
      </Grid>
    </>
  );
}
