// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import userImg from '../assets/Auth.gif'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
  

function Add() {
    const [staticModal, setStaticModal] = useState(false);
    const toggleOpen = () => setStaticModal(!staticModal);

    const [ProjectDetails,setProjectDetails] = useState({
      title:'',language:'',github:'',website:'',overview:'',ProjectImg:'',
    })
    console.log(ProjectDetails);
    

    const [imgFileStatus,setImgFileStatus] = useState(false)

    //to assign image url
    const [preview,setPreview] = useState(userImg);


    useEffect(()=>{
      if(ProjectDetails.ProjectImg.type ==='image/png' || ProjectDetails.ProjectImg.type ==='image/jpeg'|| ProjectDetails.ProjectImg.type ==='image/jpg'){
        setImgFileStatus(true)

        //convert img file into url 
        setPreview(URL.createObjectURL(ProjectDetails.ProjectImg))
      }
      else{
        setImgFileStatus(false)
        // setProjectDetails({...ProjectDetails,ProjectImg:""})
      }      
    },[ProjectDetails.ProjectImg])

  return (
    <div >
      <MDBBtn   className='btn btn-info' style={{float:'right'}}  onClick={toggleOpen}>Add</MDBBtn>

    <MDBModal staticBackdrop tabIndex='-1' open={staticModal} onClose={() => setStaticModal(false)}>
      <MDBModalDialog size='lg'>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Project Name</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody> 
            <div className="row d-flex justify-content-evenly ">
                <div className="col-6 p-2 m-3">
                    <label >
                        <input type="file" onChange={(e)=>setProjectDetails({...ProjectDetails,ProjectImg:e.target.files[0]})} style={{display:'none'}} />
                        <img src={preview} width={'100%'} alt="" />
                    </label>
                    {
                      !imgFileStatus && 
                      <div className='text-center fw-bolder text-danger'>* Only allowed the following file type . 
                      jpg,.jpeg,.png

                      </div>
                    }
                </div>
            {/* </div> */}
          
            <div className="col">
                <form>
                    <input type="text" onChange={(e)=>setProjectDetails({...ProjectDetails,title:e.target.value})} className='form-control mb-3' placeholder='Title' />
                    <input type="text" onChange={(e)=>setProjectDetails({...ProjectDetails,language:e.target.value})} className='form-control mb-3' placeholder='Language' />
                    <input type="text" onChange={(e)=>setProjectDetails({...ProjectDetails,github:e.target.value})} className='form-control mb-3' placeholder='Github' />
                    <input type="text" onChange={(e)=>setProjectDetails({...ProjectDetails,website:e.target.value})} className='form-control mb-3' placeholder='Website' />
                    <textarea onChange={(e)=>setProjectDetails({...ProjectDetails,overview:e.target.value})} className='form-control mb-3' placeholder='Overview'> </textarea>
                </form>
            </div>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' type='submit' onClick={toggleOpen}>
              Cancel
            </MDBBtn>
            <MDBBtn className='bg-primary' type='submit'>Add</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </div>
    
  )
}

export default Add