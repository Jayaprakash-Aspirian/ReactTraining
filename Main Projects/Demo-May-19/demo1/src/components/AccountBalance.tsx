import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'
import { State } from '../store'
import Welcome from './Welcome'

const AccountBalance=() => {
  const { t } = useTranslation()
  const [UserBalance,setUserBalance] = useState(false)
  const [Userbank,setUserbank] = useState("")
  const user = useSelector((state:State) => state.userdata)
  const baseURL= "http://localhost:3000/users/";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const datas = response.data;
      datas.map((userdatas:any)=>{
       if(userdatas.mobile === user){
        setUserBalance(userdatas.amount);
        setUserbank(userdatas.account);
       }
    });
  })
  },[])

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
                            <div><p className="text-uppercase">{t('user_name')}<br />{t('name')} </p> <br />{Userbank}</div>
                            <div > <p className="text-uppercase">{t('account')} <br />{t('balance')}</p><br />{UserBalance} </div>
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