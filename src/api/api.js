import axios from "axios";
import { API_URL } from "../constants/api";

const instance = axios.create({
  baseURL: API_URL,
});

export const mockDataAPI = {
  getMockData(page) {
    return instance.get(`?albumId=${page}`);
  },
  getCurrentData(id) {
    return instance.get(`/${id}`);
  },
};
