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

// Update a blog (PUT)
const update = async (id, newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.put(`${baseUrl}/${id}`, newObject, config);
  return response.data;
};

// Delete a blog (PUT)
const remove = async (id) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};


export default {
  setToken,
  removeToken,
  getAll,
  create,
  update,
  remove,
};
