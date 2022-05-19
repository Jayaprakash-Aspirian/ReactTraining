import React from 'react'

const Topbar=() => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container"> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav" aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button> <div className="navbar-brand" >
                <div className="d-flex">
                    <div className="d-flex align-items-center logo bg-purple">
                        <div className="fab fa-joomla h2 text-white"></div>
                    </div>
                    <div className="ms-3 d-flex flex-column">
                        <div className="h4">AsPay</div>
                        <div className="fs-6">App</div>
                    </div>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="mynav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"> <div className="nav-link active" aria-current="page">All Lists <span className="fas fa-th-large px-1"></span></div> </li>
                    <li className="nav-item"> </li>
                    <li className="nav-item">  </li>
                    <li className="nav-item"> logout</li>
                    <li className="nav-item">  <span className="fas fa-user pe-2"></span> Hello User</li>
                </ul>
            </div>
        </div>
    </nav>

    </div>
  )
}

export default Topbar;