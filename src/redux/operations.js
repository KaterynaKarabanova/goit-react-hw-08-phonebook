import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProfile,
  loginUser,
  logoutUser,
  registrateUser,
} from 'services/auth-servise';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const delToken = () => {
  delete axios.defaults.headers.common['Authorization'];
};

// Contacts operations
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

//
export const registrateUserThunk = createAsyncThunk(
  'auth/registration',
  async body => {
    const data = await registrateUser(body);
    setToken(data.token);

    return data;
  }
);

export const loginThunk = createAsyncThunk('auth/login', async body => {
  const data = await loginUser(body);
  setToken(data.token);
  return data;
});

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  const data = await logoutUser();
  delToken();
  return data;
});

export const getProfileThunk = createAsyncThunk(
  'auth/profile',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('token is not exist');
    }
    setToken(token);
    const data = await getProfile();
    return data;
  }
);
