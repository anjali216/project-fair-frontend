// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState,useContext } from 'react'
import userImg from '../assets/Auth.gif'
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { addProject } from '../Services/AllAPIs';
import { addProjectContextResponse } from '../ContextAPI/ContextShare';


function Edit() {

  const {setAddProjectRes} = useContext(addProjectContextResponse)

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


  const handleAdd= async() =>{
    console.log("inside add");
    const {title,language,github,website,overview,ProjectImg} = ProjectDetails
    if(!title || !language ||!github||!website||!overview ||!ProjectImg){
     toast.warn('Please fill the form', {
       position: "top-center",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
       });

    }else{
     const reqBody = new FormData()
     reqBody.append("title",title)
     reqBody.append("language",language)
     reqBody.append("github",github)
     reqBody.append("website",website)
     reqBody.append("overview",overview)
     reqBody.append("projectImg",ProjectImg)
   
     const token =sessionStorage.getItem("token")
     if(token){
       const reqHeader ={
         "Content-Type":"multipart/form-data",
         "authorization":`Bearer ${token}`

       }
       try{
         //api calling
         const response = await addProject(reqBody,reqHeader)
         console.log(response);
         if(response.status==200){
           setAddProjectRes(response.data)
           toast.success('Project added successfully....', {
             position: "top-center",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "colored",
             });
             toggleOpen()
             ProjectDetails({
               title:"",
               language:"",
               github:"",
               website:"",
               overview:"",
               ProjectImg
             })
             setPreview("")
         }
         else{
           toast.error(response.response.data, {
             position: "top-center",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "colored",
             });
         }
       }
       catch(error){
         console.log("Error"+error);
         
       }
   }
   
 }
}

  return (
    <div>
       <MDBBtn  className='btn btn-info' style={{float:'right'}}  onClick={toggleOpen}>Add</MDBBtn>

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
        <MDBBtn className='bg-primary' type='submit' onClick={handleAdd} >Add</MDBBtn>
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
<ToastContainer 
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    </div>
  )
}

export default Edit