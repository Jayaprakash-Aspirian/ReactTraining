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
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  password : string;
  confirmpassword : string;
  clientError : string;
}
