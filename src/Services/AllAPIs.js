
import commonAPI from "./CommonApi";
import { serverURL } from "./ServerURL";

//Register API Call => post => localhost:3000/api/register
export const registerAPI = async(user)=>{
    return await commonAPI('post',`${serverURL}/api/register`,user,"")
}

//Login API Call => post => localhost:3000/api/login
export const loginAPI = async(user)=>{
    return await commonAPI('post',`${serverURL}/api/login`,user,"")
}

//add projects 
export const addProject = async(project,reqHeader)=>{
    return await commonAPI('post', `${serverURL}/api/addProject`,project,reqHeader)
}

//get all user projects
export const getAllProjectsAPI = async(reqHeader)=>{
    return await commonAPI('get',`${serverURL}/api/getAllProjects`,"",reqHeader)
}

// get a particular user project
export const getUserProjects = async(reqHeader)=>{
    return await commonAPI ('get',`${serverURL}/api/getUserProjects`,"",reqHeader)
}

//get  home projects
export const getHomeProjects =async()=>{
    return await commonAPI ('get',`${serverURL}/api/getHomeProjects`,"","")
}