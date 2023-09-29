import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  delToken,
  getProfile,
  loginUser,
  logoutUser,
  registrateUser,
} from 'services/auth-servise';

export const fetchTasks = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
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
export const registrateUserThunk = createAsyncThunk(
  'auth/registration',
  async body => {
    const data = await registrateUser(body);
    return data;
  }
);

export const loginThunk = createAsyncThunk('auth/login', async body => {
  const data = await loginUser(body);
  return data;
});

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  const data = await logoutUser();
  delToken();
  return data;
});

export const getProfileThunk = createAsyncThunk('auth/profile', async () => {
  const data = await getProfile();
  return data;
});
