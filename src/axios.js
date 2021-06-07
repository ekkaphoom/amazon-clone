import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-bb35f/us-central1/api'
});

export default instance;