import React from "react";

type Props = {
  roleRequired: "ADMIN" | "USER";
  message: string;
  children?: React.ReactNode;
};

const useRole = () => {
  let user: any;
  const userdetails = localStorage.getItem("user");
  if (userdetails) {
    user = JSON.parse(userdetails);
  }
  if (user) {
    return user.role;
  } else {
    return "NO USER";
  }
};

const WithPermission = (props: Props) => {
  const { roleRequired, message, children } = props;
  console.log(roleRequired);
  const role = useRole();
  console.log(role);

  return (
    <>{roleRequired === role ? children : <h3>{message ? message : ""}</h3>}</>
  );
};

export default WithPermission;
