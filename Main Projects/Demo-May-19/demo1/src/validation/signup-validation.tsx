import { EMAIL_REGX, MOBILE_NUMBER_LENGTH, PASSWORD_LENGTH,PASSWORD_REGX } from "../utils/constants/constants"

const RegisterValidation = (userdata:any) => {
    var userErrors = {firstname:"",lastname:"",email:"",mobile:"",password:""}

    if (!userdata.firstName) {
        userErrors.firstname = 'Please enter the Firstname'
    }
    else if (!userdata.lastName) {
        userErrors.lastname = 'Please enter the Lastname'
    }
    else if (!userdata.email) {
        userErrors.email = 'Please enter the Email'
    }
    else if (!((EMAIL_REGX).test(userdata.email))) {
        userErrors.email = 'Please enter the valid Email'
    }
    else if (userdata.phone.length !== MOBILE_NUMBER_LENGTH) {
        userErrors.mobile = 'Please enter valid Mobile Number'
    }
    else if (userdata.password.length < PASSWORD_LENGTH) {
        userErrors.password = 'Please enter min 8 characters '
    }
    else if (!((PASSWORD_REGX).test(userdata.password))) {
        userErrors.password  = 'Password must contain one uppercase,one lowercase,one Digit,one special character'
    }
    return userErrors
}
export default RegisterValidation