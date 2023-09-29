import axios from 'axios';

export const registrateUser = async body => {
  const data = axios.post('/users/signup', body);
  const newData = await data.then(data => {
    return data.data;
  });

  return newData;
};
export const loginUser = async body => {
  const { data } = await axios.post('/users/login', body);

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
