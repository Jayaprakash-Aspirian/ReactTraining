export interface Person {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  account: string;
  amount: string;
  role: string;
}

export interface Transactions {
  from: string;
  to: string;
  date: string;
  sentmoney: string;
}

export interface LoginData {
  mobile: string;
  password: string;
}

export interface SignupData{
  // userdata:{
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    password : string;
    confirmpassword : string;
  // }
  // error :{
    clientError : string;
  // }
}

export interface PropsAllusersare{
  allusersare :any,
  dispatch:any,
  navigate:any,
  getAllusersdata:any,
  updateUserdata :any,
  message :any
}

export interface ProfileData  {
  userdata: {
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    account: string;
    amount: string;
    role: string;
  };
};

export interface PermissionProps {
  roleRequired: "ADMIN" | "USER";
  message: string;
  children?: React.ReactNode;
};

export interface AccountPermissionProps {
  roleRequired: "BankAccountHaveUser";
  message: string;
  children?: React.ReactNode;
};
