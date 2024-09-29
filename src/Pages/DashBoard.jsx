// eslint-disable-next-line no-unused-vars
import React from 'react'
import Add  from '../Components/Add'
import View from  '../Components/View'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <div className='row p-5'>
     <h2>Welcome User</h2>
      <div className='col-6 shadow p-5 m-4'>
    <div className="row d-flex">
      <div className="col-6">
        My Projects
      </div>
      <div className="col-6">
       <button className='btn btn-info'  style={{float:'right'}}><Add/></button> 
      </div>
    </div>
     <div  className='row mt-3'>
     <div className="col">
      <View/>
     </div>
     </div>
    </div>
    <div className='col-4 shadow p-5'>
     <Profile/> 
    </div>
    </div>
  )
}

export default Dashboard