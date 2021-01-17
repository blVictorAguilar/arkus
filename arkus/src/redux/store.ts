import { Action, configureStore } from "@reduxjs/toolkit";

import { Contacts } from "../features/types/types";
import { ThunkAction } from "redux-thunk";
import contactSliceReducer from '../features/contact/ContactSlice'

export type AppThunk = ThunkAction<void, Contacts, unknown, Action<string>>;

export const store = configureStore({
  reducer: {
    contactStore: contactSliceReducer,
  },
});