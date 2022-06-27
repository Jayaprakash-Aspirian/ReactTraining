export const LoginValidation = (mobile: string, password: string) => {
  var userErrors = "";
  !mobile
    ? (userErrors = "Please enter the Mobile Number")
    : !password
    ? (userErrors = "Please enter the password")
    : console.log("");
  return userErrors;
};
