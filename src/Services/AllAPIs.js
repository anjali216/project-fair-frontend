
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