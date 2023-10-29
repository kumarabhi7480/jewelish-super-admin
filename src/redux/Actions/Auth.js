
import axiosInstance from "../../utils/axios";
const axios = axiosInstance;

export const login =  ({email,password})=> async(dispatch)=>{
    try{
        console.log("Hello");
        dispatch({type: "loginRequest"});
        const {data} = await axios.post("admin/login", {email,password});
        console.log(data);
        const {success,message,token,user} = data;
        if(success == true){
            localStorage.setItem("authToken", token);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch({type: "loginSuccess"});
        }else{
            dispatch({type: "loginFail", payload: message});
        }
    }catch(error){
        dispatch({type: "loginFail", payload: error.response.data.message});
        console.log(error.message);
    }
}
   