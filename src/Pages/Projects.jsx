// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <div  className='text-center  m-5 p-5'>
    <h1 className='mb-5'>All Projects</h1>
    <div className='d-flex w-50'></div>
      <input type="text"  className='form-control w-50 mx-auto'  placeholder='Search By Technology' />

      <div className="row px-5 mb-5">
        <div className="col">
        <ProjectCard/>
        </div>
       </div>
      
    </div>

    
  )
}

export default Projects