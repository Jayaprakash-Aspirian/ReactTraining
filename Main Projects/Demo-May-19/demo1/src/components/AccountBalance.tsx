import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'
import { State } from '../store'
import { Person } from './types/typesimport';
import Welcome from './Welcome'

const AccountBalance=() => {
  const { t } = useTranslation()
  const [UserData,setUserData] = useState({} as Person)
    // const[data,setData] = useState<any>([])
  const datas : any = localStorage.getItem("user")
  useEffect(()=>{
    setUserData(JSON.parse(datas))
  },[])
  
  // const[data,setData] = useState<any>([])
  // const user = useSelector((state:State) => state.userdata)
  // const baseURL= "http://localhost:3000/users/";

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setData(response.data)
  //     console.log(response.data)
  //   })
  //   .catch(err=>{
  //       console.log(err)
  //   })
  // },[])

  // useEffect(()=>{
  //   data.map((userdatas:any)=>{
  //       if(userdatas.mobile === user){
  //         setUserBalance(userdatas.amount);
  //         setUserbank(userdatas.account);
  //       }     
  //   })
  // })

  
  return (
    <>
     <div className="dashboard-change">
        <div id="main-content" className="bg-white border">
            <Welcome />
            <br />
            <div className="text-uppercase">{t('account')}</div>
            <div className="order my-3 bg-light">
                <br />
                <div className="column">
                    <div className="col-lg-8">
                        <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                            <div><p className="text-uppercase">{t('user_name')}<br />{t('name')} </p> <br />{UserData.account}</div>
                            <div > <p className="text-uppercase">{t('account')} <br />{t('balance')}</p><br />{UserData.amount} </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
     </div>
   </>
  )
}

export default AccountBalance;