import {
  EMAIL_REGX,
  MOBILE_NUMBER_LENGTH,
  PASSWORD_LENGTH,
  PASSWORD_REGX,
} from "../utils/constants/constants";

export const RegisterValidation = (userdata: any) => {
  var userErrors = "";

  !userdata.firstname
    ? (userErrors = "Please enter the Firstname")
    : !userdata.lastname
    ? (userErrors = "Please enter the Lastname")
    : !userdata.email
    ? (userErrors = "Please enter the Email")
    : !EMAIL_REGX.test(userdata.email)
    ? (userErrors = "Please enter the valid Email")
    : userdata.mobile.length !== MOBILE_NUMBER_LENGTH
    ? (userErrors = "Please enter valid Mobile Number")
    : userdata.password.length < PASSWORD_LENGTH
    ? (userErrors = "Password must contain min 8 characters ")
    : !PASSWORD_REGX.test(userdata.password)
    ? (userErrors =
        "Password must contain one uppercase,one lowercase,one Digit,one special character")
    : console.log("");

  return userErrors;
};
