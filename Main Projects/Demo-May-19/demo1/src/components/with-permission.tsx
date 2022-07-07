import React from "react";
import { userdetailsdata } from "./session-storage";
import { AccountPermissionProps, PermissionProps } from "./types/typesimport";


const useRole = () => {
  const userdetails = userdetailsdata();
  const user = userdetails ? userdetails : "";
  return user ? user.role : "NO USER";
};

export const WithPermission = (props:PermissionProps) => {
  const { roleRequired, message, children } = props;
  const role = useRole();
  console.log(role)
  console.log(roleRequired)
  console.log("A")
  return (
    <>{roleRequired === role ? children : <h3>{message ? message : ""}</h3>}</>
  );
};

// import React from "react";
// import { userdetailsdata } from "./session-storage";
// import { AccountPermissionProps, PermissionProps } from "./types/typesimport";

// const userdetails = userdetailsdata();

// const useRole = () => {
//   const user = userdetails ? userdetails : "";
//   return user ? user.role : "NO USER";
// };

// const accountHaveUser = () =>{
//   const userdetails = userdetailsdata();
//   return userdetails.account!==null ? "BankAccountHaveUser" : ""
// }

// export const WithPermission = (props:PermissionProps) => {
//   const { roleRequired, message, children } = props;
//   const role = useRole();

//   return (
//     <>{roleRequired === role ? children : <h3>{message ? message : ""}</h3>}</>
//   );
// };

// export const UserPermission = (props:AccountPermissionProps) =>{
//   const { roleRequired, message, children } = props;
//   const roleis = accountHaveUser()
//   console.log(roleis)
//   console.log(roleRequired)
//   return(
//     <>{ roleRequired===roleis ? children : "" }</>
//   )
// }





