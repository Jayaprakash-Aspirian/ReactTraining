import React from 'react'
import { Outlet } from 'react-router-dom';

const Dashboard=() => {
  return (
   <>
    <div className="col-lg-9 my-lg-0 my-1">
        <div id="main-content" className="bg-white border">
            <div className="d-flex flex-column">
           
                <div className="h5">Hello fn ln</div>
                <div>Logged in as:</div>
            </div> 
      
            <div className="d-flex my-4 flex-wrap">
                <div className="box me-4 my-1 bg-light" >  
                    {/* <img src="{% static 'images/school8.png' %}" alt=""> */}
                    <div className="d-flex align-items-center mt-2">
                        <div className="tag">Total Schools</div>
                        <div className="ms-auto number"></div>
                    </div>
                </div>
            </div>
  
            <div className="text-uppercase">School Lists</div>
       
            <div className="order my-3 bg-light">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="d-flex flex-column justify-content-between order-summary">
                            <div className="d-flex align-items-center">
                                <div className="text-uppercase">Name</div>
                            </div>
                      
                            <div className="fs-8">Username: </div>
                            <div className="fs-8">  Name : </div>
                            <div className="fs-8">Email: </div>
                            <div className="fs-8">JoinedDate: </div>

                            <div className="rating d-flex align-items-center pt-1"> 
                        {/* <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png" alt=""> */}
                            <span className="px-2">Rating:</span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="far fa-star"></span> </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                            <div className="btn btn-primary text-uppercase">Edit Details</div>
                        </div>
                    </div>
                </div>
            </div>

        </div> 
    
    </div>
   </>
  )
}

export default Dashboard;