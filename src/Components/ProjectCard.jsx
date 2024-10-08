/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
//import serverUrl from '../Services/ServerURL'
import { serverURL } from "../Services/ServerURL";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
  } from 'mdb-react-ui-kit';
  import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function ProjectCard({projects}) {
  console.log(projects);
  

    const [optSmModal, setOptSmModal] = useState(false);

    const toggleOpen = () => setOptSmModal(!optSmModal);
 
    return (
    <div> <div className='row'>
    <MDBCard onClick={toggleOpen} style={{ width: '350px', height: '400px' }}>
      <MDBCardImage src = {projects? `${serverURL}/uploads/${projects.projectImg}` : 'https://liveimages.algoworks.com/new-algoworks/wp-content/uploads/2022/06/07132503/software-house-gif2-min.gif'} position='top' width={'300px'} height={'350px'} alt='...' />
      <MDBCardBody>
        <MDBCardTitle className='text-center'>{projects.title}</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  </div>
  <MDBModal open={optSmModal} tabIndex='-1' onClose={() => setOptSmModal(false)}>
    <MDBModalDialog size='lg'>
      <MDBModalContent>
        <MDBModalHeader>
          <MDBModalTitle>Project Name</MDBModalTitle>
          <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
        </MDBModalHeader>
        <MDBModalBody>
          <div className="row">
            <div className="col-6">
            <img src="https://media.tenor.com/2fXbn6Xtt0UAAAAM/software-software-development.gif" width={'100%'} alt="" />
            </div>
            <div className="col-6">
              <h2>Description</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae earum officia cumque impedit, cupiditate non tempora eveniet mollitia natus delectus voluptates voluptas. Eaque consequuntur natus eius ducimus? Doloribus, porro at.</p>
              <h3>Technologies : React </h3>

            </div>
            <hr />
            <div className="row d-flex justify-content-evenly">
              <div className='col'><FaGithub className='fs-1' /></div>
              <div className='col'><FaLink className='fs-1' /></div>
            </div>
          </div>
        </MDBModalBody>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal></div>
  )
}

export default ProjectCard