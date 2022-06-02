import axios from "axios";
import { useDispatch } from "react-redux";

const baseURL = "http://localhost:3000/users/";


const fetchData = async(url :any) =>
  {
    return await axios.get(url).then(res => res.data);
  }

export const allusersdata=fetchData(baseURL)


// export const allusersdata = getDatas.then(
//     value=>{
//     //   const dispatch = useDispatch();
//     //   dispatch(AllUsersData(value));
//     return value;
//     }
//   )


  

