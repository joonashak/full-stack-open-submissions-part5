import axios from 'axios';


const baseUrl = '/api/blogs';
let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const removeToken = () => {
  token = null;
};

// Get all blogs
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

// Create new blog
const create = async (newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};


export default {
  setToken,
  removeToken,
  getAll,
  create,
};