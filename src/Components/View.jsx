/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BiSolidEdit } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";
import { ImGithub } from "react-icons/im";
import { RiDeleteBin5Fill } from "react-icons/ri";

function View({projects}) {
  console.log(projects);
  
  return (
    <div className='row'>
      <div className="col">
      <div className="row">
        <div className="col-8">
          <h5>Project Name</h5>
        </div>
        <div className="col-4">
        <BiSolidEdit className='fs-3 text-secondary fw-bolder me-2'/>
        <BiLinkExternal className='fs-3 text-primary fw-bolder me-2' />
        <ImGithub className='fs-3 text-black fw-bolder me-2' />
        <RiDeleteBin5Fill  className='fs-3 text-danger fw-bolder me-2' />
        </div>
      
     </div>




      </div>

    </div>
  )
}

export default View