import axios from 'axios';

const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "/"
    : "http://localhost:4000/";

// const api = axios.create({ baseURL: API_ROOT });

// export default api;
export default axios.create({ baseURL: API_ROOT });

// instance.get('/hi').then((data) => console.log(data));
