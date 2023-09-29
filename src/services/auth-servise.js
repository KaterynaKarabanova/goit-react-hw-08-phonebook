import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = token;
};
export const delToken = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const registrateUser = async body => {
  return await axios.post('/users/signup', body);
};
export const loginUser = async body => {
  const { data } = await axios.post('/users/login', body);

  setToken(`Bearer ${data.token}`);
  return data;
};
export const logoutUser = async body => {
  const { data } = await axios.post('/users/logout');

  return data;
};

export const getProfile = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};
