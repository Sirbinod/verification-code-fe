/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from "axios";
import { API_BASE_URL } from ".";

export const postData = async (url: string, data: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${url}`, data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        return axiosError.response.data;
      } else {
        return { error: "Network Error" };
      }
    }
  }
};
