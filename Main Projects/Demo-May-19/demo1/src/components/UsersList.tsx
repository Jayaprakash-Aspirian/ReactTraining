import React from 'react'

const UsersList = () =>{
  return (
   <>
    <div className="dashboard-change">
     <div id="main-content" className="bg-white border">
        <div className="d-flex flex-column">
            <div className="h5">Any queries:</div>
            <div> email id</div>
        </div> 
        <br />
      
        {/* <div className="d-flex my-4 flex-wrap">
            <div className="box me-4 my-1 bg-light" >  
                <div className="d-flex align-items-center mt-2">
                  <div className="h5">Any queries:</div>
                  <div> email id</div>
                </div>
            </div>
        </div> */}

        <div className="text-uppercase">Other Deatils :</div>
   
        <div className="order my-3 bg-light">
            <br />
            <div className="row">
              
                <div className="col-lg-4">
                  
                    <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                        <div >  details</div>
                    </div>
            
                </div>
             
                
            </div>
        </div>
    
    </div> 

   </div>
  </>
  )
}

export default UsersList;