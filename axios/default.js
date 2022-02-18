import axios from "axios";
import { baseURL } from "../constants/endpoint";

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
