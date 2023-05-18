import axios from "axios";
export const axiosConsumer = <T,>(URL: string) => {
  return axios.get<T>(URL);
};
