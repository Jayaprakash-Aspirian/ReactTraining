import React from 'react'
import WithPermission from './WithPermission';


const Tab3 = () => {
  return (
    <div className='tab3'>Tab3
      <WithPermission roleRequired='ADMIN' message="only Admin can view this">
          <h1>Welcome ADMIN!</h1>
      </WithPermission>
    </div>
  )
}

export default Tab3;