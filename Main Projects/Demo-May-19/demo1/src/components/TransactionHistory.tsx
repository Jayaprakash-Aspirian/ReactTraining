import axios from 'axios';
import { stringify } from 'querystring';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { State } from '../store';
import Welcome from './Welcome';


const TransactionHistory=()=> {
  const value = useSelector((state:State) => state.userdata)
  const role = useSelector((state:State) => state.userrole)
  const [post,setPost] = useState()
  const baseURL = "http://localhost:3000/transaction-history/";
  debugger;
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        interface Person {
            from: string,
            to: string,
            date :string,
            sentmoney : string,
          }
        const val = response.data;

        debugger;
        setPost(val.map((post :Person ,index:number)=>{ 
         if(value === post.from){
            return(
             <div className="order my-3 bg-light" key={index}>
             <div className="column" >
                <div className="col-lg-8">
                    <div className="d-flex flex-column justify-content-between order-summary">
                       <div >
                            <div className="d-flex align-items-center">
                                <div className="text-uppercase">{post.to}</div>
                            </div>
                            <div className="fs-8">{post.date}</div>
                            <div className="rating d-flex align-items-center pt-1"> </div>
                     </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                        <div className="btn btn-primary text-uppercase" style={{color:"red"}}>-{post.sentmoney}</div>
                      
                    </div>
                </div>
            </div>
            </div>
            )}
         else if(value === post.to){
            return(
                <div className="order my-3 bg-light" key={index}>
                <div className="column" >
                   <div className="col-lg-8">
                       <div className="d-flex flex-column justify-content-between order-summary">
                          <div >
                               <div className="d-flex align-items-center">
                                   <div className="text-uppercase">{post.from}</div>
                               </div>
                               <div className="fs-8"> {post.date}</div>
                               <div className="rating d-flex align-items-center pt-1"> </div>
                        </div>
   
                       </div>
                   </div>
                   <div className="col-lg-4">
                       <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                           <div className="btn btn-primary text-uppercase"style={{color:"green"}}>+{post.sentmoney}</div>
                         
                       </div>
                   </div>
               </div>
               </div>
            )}

         else if(role === "ADMIN"){
            return(
                <div className="order my-3 bg-light" key={index}>
                <div className="column" >
                   <div className="col-lg-8">
                       <div className="d-flex flex-column justify-content-between order-summary">
                          <div >
                               <div className="d-flex align-items-center">
                                   <div className="text-uppercase"></div>
                               </div>
                               <div className="fs-8">From :{post.from}</div>
                               <div className="fs-8">To :{post.to} </div>
                               <div className="fs-8">Sent Money : {post.sentmoney} </div>
                               <div className="fs-8">Date: {post.date} </div>
                               <div className="rating d-flex align-items-center pt-1"> </div>
                        </div>
   
                       </div>
                   </div>
                   <div className="col-lg-4">
                       <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                           <div className="btn btn-primary text-uppercase">Edit Details</div>
                         
                       </div>
                   </div>
               </div>
               </div>
            )

         }
        }))      
    });
  }, []);
  return (
    <>
    <div className="dashboard-change">
       <div id="main-content" className="bg-white border">
           <Welcome />
           <br />
 
           <div className="text-uppercase">Transaction History :</div>
      
            {post}
       
       </div> 
   
    </div>
  </>
  )
}

export default TransactionHistory;