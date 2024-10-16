
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState}  from 'react'
import Add  from '../Components/Add'
import View from  '../Components/View'
import Profile from '../Components/Profile'



function Dashboard() {


    const user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user);
    let userName=user.username

    

  return (
    <div className='row '>
     <h2>Welcome {userName} </h2>
      <div className='col-7  p-5 m-4'>
    <div className="row d-flex">
      <div className="col-6">
        My Projects
      </div>
      <div className="col-6">
       <Add/>
      </div>
    </div>
     <div  className=' mt-3 '>
      <div className="col">
      <View  />
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