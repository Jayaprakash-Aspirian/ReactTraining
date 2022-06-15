
export const LoginValidation = (mobile:string,password:string) => {
    var userErrors = ''
    if (!mobile) {
        userErrors = 'Please enter the MobileNumber'
    } if (!password) {
        userErrors = 'Please enter the password'
    }
    return userErrors
}
