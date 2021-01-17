import { ContactItem, Contacts } from "../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AppThunk } from "../../redux/store";
import axios from "axios";

const initialState: Contacts = {
  contacts: [],
  loading: false,
  errors: "",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setContactsList: (
      state,
      { payload }: PayloadAction<Array<ContactItem>>
    ) => {
      state.contacts = payload;
    },

    setContact: (state, { payload }: PayloadAction<ContactItem>) => {
      state.contacts.push(payload);
    },

    deleteContactItem: (state, { payload }: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((item) => item.id !== payload);
    },

    updateContactItem: (state, { payload }: PayloadAction<ContactItem>) => {
     const index = state.contacts.findIndex(item=>item.id === payload.id)
      state.contacts[index]= payload
    },
  },
});

export const {
  setLoading,
  setErrors,
  setContactsList,
  setContact,
  deleteContactItem,
  updateContactItem
} = contactSlice.actions;
export default contactSlice.reducer;

export const contactSelector = (state: { contactStore: Contacts }) =>
  state.contactStore;

export const getContacts = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const baseURL: string = "https://reqres.in/api/users";
      const res = await axios.get(baseURL);

      dispatch(setLoading(false));
      dispatch(setContactsList(res.data.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};

export const addContact = (data: ContactItem): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const baseURL: string = "https://reqres.in/api/users";
      const res = await axios.post(baseURL, {
        data,
      });

      dispatch(setContact({ id: parseInt(res.data.id), ...res.data.data }));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};

export const deleteContact = (id: number): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const baseURL: string = `https://reqres.in/api/users/${id}`;
      const res = await axios.delete(baseURL);
      if(res.status===204)
      dispatch(deleteContactItem(id));
      else return
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};

export const updateContact = (id:number, data: ContactItem): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const baseURL: string = `https://reqres.in/api/users/${id}`;
      const res = await axios.put(baseURL,{
        data
      });
      console.log({id,...res.data.data});
      if(res.status===200)
      dispatch(updateContactItem({id,...res.data.data}));
      else return
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
