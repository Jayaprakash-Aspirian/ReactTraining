import axios from "axios";

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
    data: data.payload,
  });

export const addingTransactionsData = (data: any) =>
  axiosInstance({
    method: "POST",
    url: "/transaction-history",
    data: data.payload,
  });

export const allTransactionsData = async () =>
  await axiosInstance({
    method: "get",
    url: "/transaction-history",
  });

axiosInstance.interceptors.request.use((x: any) => {
  console.log(x);
  return x;
});
axiosInstance.interceptors.response.use((x: any) => {
  console.log(x);
  return x;
});
