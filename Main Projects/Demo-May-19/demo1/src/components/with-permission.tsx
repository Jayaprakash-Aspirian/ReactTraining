import React from "react";

type Props = {
  roleRequired: "ADMIN" | "USER";
  message: string;
  children?: React.ReactNode;
};

const useRole = () => {
  const userdetails = sessionStorage.getItem("user");
  const user = userdetails ? JSON.parse(userdetails) : "";
  return user ? user.role : "NO USER";
};

const WithPermission = (props: Props) => {
  const { roleRequired, message, children } = props;
  const role = useRole();

  return (
    <>{roleRequired === role ? children : <h3>{message ? message : ""}</h3>}</>
  );
};

export default WithPermission;
