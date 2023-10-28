
import axiosInstance from "../../utils/axios";
const axios = axiosInstance;

export const login =  ({email,password})=> async(dispatch)=>{
    try{
        console.log("Hello");
        dispatch({type: "loginRequest"});
        const {data} = await axios.post("admin/login", {email,password});
        console.log(data);
        const {success,message,token,user} = data;
    }catch(error){
        console.log(error.message);
    }
}
   