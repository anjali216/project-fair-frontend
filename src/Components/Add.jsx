// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBBtn
  } from 'mdb-react-ui-kit';

  
function Add() {
    const [optSmModal, setOptSmModal] = useState(false);

    const toggleOpen = () => setOptSmModal(!optSmModal);

  return (
    <div>
    <button className='btn btn-info' style={{float:'right'}} onClick={toggleOpen}> Add </button>  
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
              <label>
                <input type="file" style={{display:'none'}} />
                <img src="https://media.tenor.com/2fXbn6Xtt0UAAAAM/software-software-development.gif" width={'100%'} alt="" />
              </label>
            </div>
            <div className="col-6">
               
              <input type="text" className='form-control mb-3' placeholder='Title'  />
              <input type="text" className='form-control mb-3' placeholder='Language'  />
              <input type="text" className='form-control mb-3' placeholder='Github'  />
              <input type="text" className='form-control mb-3' placeholder='Website'  />
              <textarea className='form-control mb-3' placeholder='Overview' ></textarea>
              <div className='d-flex justify-content-evenly'>
              <button type='submit' className='btn btn-success'>Add</button>
              <button type='submit' onClick={toggleOpen} className='btn btn-dark'>Cancel</button>
              </div>
                
             </div>
          </div>
        </MDBModalBody>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal>
    </div>
  )
}

export default Add