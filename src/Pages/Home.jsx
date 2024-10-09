// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard';
import {  getHomeProjectsAPI } from '../Services/AllAPIs';

function Home() {
  const [projects,setProjects] = useState([])

  let token =sessionStorage.getItem('token');

  const getHomeProjects= async()=>{
    
      try{
        const HomeProjects = await getHomeProjectsAPI()
        console.log(HomeProjects);
        if(HomeProjects.status==200){
          setProjects(HomeProjects.data)
        }
        else{
          console.log("Cant get projects");
          
        }
      }
      catch(error){
        console.log(error);
        
      }
    }


    useEffect(()=>{
      getHomeProjects()
    },[])
  

  return (
    <div>
        <section>
      <div className='row'>
        <div className='col-6 p-5'>
           <h1>Project Fair</h1>
           <p style={{textAlign:'justify'}}>A project fair, on the other hand, is a broader event that can encompass a range of subjects and project types. While some project fairs may 
            include science projects, they can also include projects in areas such as history, social studies, art, and technology.
            While some project fairs may include science projects, they can also include projects in areas such as history, social studies, art, and technology.
           </p>
          
           <div className='text-center'>
           {
           token ?
           
           <Link to={'/dashboard'}>
            <button className='btn btn-warning'>
              View Dashboard
            </button>
           </Link>
           :
           
           <Link to={'/login'}>
            <button className='btn btn-warning'>
              Get Started
            </button>
           </Link>
           }
           </div>
        </div>

        <div className='col-6 p-5'>
          <img src = "https://cdn.dribbble.com/users/242629/screenshots/1547695/computer-guys-v1.gif" alt=""  width={'100%'}  height={'250px'} />
        </div>
      </div>
      </section>

      <section>
     <div className='row'>
     <h1 className='m-3 text-info text-center'>Explore our Projects </h1>
     {/* <ProjectCard/> */}
     {
          projects.length > 0 ? projects.map(item=>(
            // eslint-disable-next-line react/jsx-key
            <div className="col m-2">
          <ProjectCard projects={item}  />
        </div>
          ))
          :<p className='text-danger fw-bolder'>Cant fetch data </p>
        }
     </div>

     </section>

<section>
     <div className='text-center m-5'>
     <Link to={'/projects'}>
     <button className='btn btn-primary'>View Projects</button>
     </Link>
     </div>
  </section>

    </div>
  )
}

export default Home