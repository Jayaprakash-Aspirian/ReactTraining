import {
  addUserdata,
  deleteUserdata,
  getUsersdata,
  pageNotfound,
  updateUserdata,
} from "./controller/controller";

export const userRoutes = [
  {
    method: "GET",
    path: "/",
    handler: getUsersdata,
  },
  {
    method: "POST",
    path: "/adduser",
    handler: addUserdata,
  },
  {
    method: "PUT",
    path: "/updateuser",
    handler: updateUserdata,
  },
  {
    method: "DELETE",
    path: "/deleteuser",
    handler: deleteUserdata,
  },
  {
    method: "*",
    path: "/{any*}",
    handler: pageNotfound,
  },
];
