import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, getProfile, loginUser } from 'services/auth-servise';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchTasks = createAsyncThunk(
  'contacts/fetchAll',
  getContacts()
  // async (_, thunkAPI) => {
  //   try {
  //     const response = await axios.get('/contacts');
  //     return response.data;
  //   } catch (e) {
  //     return thunkAPI.rejectWithValue(e.message);
  //   }
  // }
);
export const addContacts = createAsyncThunk(
  'contacts/addContacts',

  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactsId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactsId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk('auth/login', async body => {
  const data = await loginUser(body);
  console.log(data);
  return data;
});

export const getProfileThunk = createAsyncThunk('auth/profile', async () => {
  const data = await getProfile();
  return data;
});
