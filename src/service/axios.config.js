import axios from "axios";

export const req = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3600,
});
