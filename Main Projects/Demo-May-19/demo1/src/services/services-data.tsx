import axios from 'axios'
import { timeEnd } from 'console';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

const allUsersData = () =>
    axiosInstance({
        method: 'get',
        url: '/users'
    })

// const authenticateuser = (data :any) =>{

//     allUsersData()
//       .then(res => {
//             console.log(res)  
//             const useris = res.data.filter(
//                 (datas: any) => datas.mobile === data.mobile && datas.password === data.password
//             );
//             if(useris[0]){
//                 sessionStorage.setItem("user", JSON.stringify(useris[0]));
//                 debugger;
//             }
//             else{

//             }  
//       })
//       .catch((err) => {
        
//         //   setError(err.response.data.error)
//       })


// }

const allTransactionsData = (data:any) =>
    axiosInstance({
        method: 'POST',
        url: '/transaction-history',
        data:data
    })

export default {
    allUsersData,
    allTransactionsData
}

// const axios:any = require('axios').default;

axiosInstance.interceptors.request.use((x:any) =>{
    console.log(x)
    console.log("axios" ) 
    return x;
})
axiosInstance.interceptors.response.use((x:any) =>{
    console.log(x)
    return x;
})

// axios.post('https://jsonplaceholder.typicode.com/posts',{myproperty:true}).then()
