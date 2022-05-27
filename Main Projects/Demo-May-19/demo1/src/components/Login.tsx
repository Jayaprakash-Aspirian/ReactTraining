import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { usersdata } from '../datas/datas'
import { MobileData, RoleData } from '../store/action-creators'


const Login =() => {
  const { t } = useTranslation()
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [mobile,setMobile] = useState("")
  const [password,setPassword]= useState("") 
  const [useris,setUseris] = useState<string>()
 
  const AuthenticateLogin=()=>{
    usersdata.map((data)=>{
      authenticate(data.mobile,data.password,data.role,data);
    }) 
    if(useris ==  ""){
      console.log("it's not a user")
    } 
  }
  const authenticate= (val1:string,val2:string,role:string,data:any)=>{
     if (val1 === mobile && val2 ===password)
     {
      setUseris(val1);
      dispatch(MobileData(val1))
      dispatch(RoleData(role))
      navigate("/dashboard")  
     }
  }

  return (
   <div className='body-signup'>
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card">
          <h2 className="card-title text-center" id="h2-signup">{t('login')} Page</h2>
            <div className="card-body py-md-4">
              <form onSubmit={AuthenticateLogin}>
                <div className="form-group">
                  <input type="text" className="form-control" id="phone" placeholder={t('enter_mobile')} name="phone" onChange={(e)=>setMobile(e.target.value)} />
                </div>           
                <div className="form-group">
                  <input type="password" className="form-control" id="password" placeholder={t("enter_password")} name="password"  onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a className="btn btn-secondary" onClick={()=>{navigate("/signup") }}>{t('signup')}</a>
                  <button className="btn btn-primary" type="submit">{t('login')}</button>
                </div>
              </form>
            </div>
          </div>
        </div> 
      </div>
    </div>
   </div>
  )
}

export default Login;