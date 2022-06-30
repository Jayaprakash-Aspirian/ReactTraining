import { Person } from "./types/typesimport";

export const userdetails: any = () => {
  return sessionStorage.getItem("user");
};


export const userdetailsdata: any = ()=>{
  return JSON.parse(userdetails())
}
