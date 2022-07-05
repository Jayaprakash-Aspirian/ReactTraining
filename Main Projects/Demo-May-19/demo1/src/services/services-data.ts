import axios from "axios";
import { Person } from "../components/types/typesimport";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const allUsersData = async () =>
  await axiosInstance({
    method: "get",
    url: "/users",
  });

export const addingUsersData = (data: any) =>
  axiosInstance({
    method: "POST",
    url: "/users",
    data: data,
  });

export const addingTransactionsData = (data: any) =>
  axiosInstance({
    method: "POST",
    url: "/transaction-history",
    data: data,
  });

export const allTransactionsData = async () =>
  await axiosInstance({
    method: "get",
    url: "/transaction-history",
  });

export const UpdateuserDatas =  (data:any) =>
  axiosInstance({
    method: "PUT",
    url: `/users/${data.id}`,
    data : data,
  });


axiosInstance.interceptors.request.use((x: any) => {
  console.log(x);
  return x;
});
axiosInstance.interceptors.response.use((x: any) => {
  console.log(x);
  return x;
});
