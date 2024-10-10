// eslint-disable-next-line no-unused-vars
import React,{useEffect, useState}  from 'react'
import Add  from '../Components/Add'
import View from  '../Components/View'
import Profile from '../Components/Profile'
import { getUserProjectsAPI } from '../Services/AllAPIs'

function Dashboard() {
    const user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user);
    let userName=user.username
  

    const [projects,setProjects] = useState([])

    const getUserProjects= async()=>{
    let token = sessionStorage.getItem('token');
    if(token){
      const reqHeader={
        "Content-Type" : "application/json",
        "Authorization" :" Bearer " +token
      }
      try{
        const allProjects = await getUserProjectsAPI(reqHeader)
        console.log(allProjects.data);
        if(allProjects.status==200){
          setProjects(allProjects.data)
        }
        else{
          console.log("Cant get projects");
          
        }
      }
      catch(error){
        console.log(error);
        
      }
    }
  
  }
  
    useEffect(()=>{
      getUserProjects()
    },[])
  
  



  return (
    <div className='row p-5 '>
     <h2>Welcome {userName} </h2>
      <div className='col-6 shadow p-5 m-4'>
    <div className="row d-flex">
      <div className="col-6">
        My Projects
      </div>
      <div className="col-6">
       {/* <button className='btn btn-info' style={{float:'right'}}><Add/></button> */}
       <Add/>
      </div>
    </div>
     <div  className='row mt-3'>
     <div className="col">
      <View  projects={projects}/>
     </div>
     </div>
    </div>
    <div className='col-4  p-5'>
     <Profile/> 
    </div>
    </div>
  )
}

export default Dashboard