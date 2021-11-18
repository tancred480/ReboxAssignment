import {USER_ENTRY_REQUEST,USER_ENTRY_SUCCESS,USER_ENTRY_FAIL,
        USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS,USER_UPDATE_FAIL,
        USER_DELETE_REQUEST,USER_DELETE_SUCCESS,USER_DELETE_FAIL, USERLIST_GET_SUCCESS, USERLIST_GET_REQUEST, USERLIST_GET_FAIL
} from "../constants/userConstant.js";

import Axios from "axios";

const userlist_get=async(dispatch)=>{
    try {
        dispatch({
            type:USERLIST_GET_REQUEST,
        });
        
        const {data} = await Axios.get("/api/user/get_users_records");
            console.log(data.message);
            dispatch({
                type:USERLIST_GET_SUCCESS,
                payload:data.message
            });

        
    } catch (e) {
        dispatch({
            type:USERLIST_GET_FAIL,
            payload:e.response && e.response.data.message ? e.response.data.message :e.message
        })   
    }
}
const user_entry=(name,email,phoneno,dob,address)=>async(dispatch)=>{
    dispatch({
        type:USER_ENTRY_REQUEST,
        payload:{name,email,phoneno,dob,address}
    });
    try {
        const {data} = await Axios.post("/api/user/user_entry",{name,email,phoneno,dob,address});
        dispatch({
            type:USER_ENTRY_SUCCESS,
            payload:data.message
        })
    } catch (e) {
        dispatch({
            type:USER_ENTRY_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message :e.message
        })   
    }
}

const user_update=(values)=>async(dispatch)=>{
    const id=values.id;
    try {
        dispatch({
        type:USER_UPDATE_REQUEST,
        payload:values
    });
    const {data} = await Axios.put("/api/user/user_update/"+id+"",values);
        dispatch({
            type:USER_UPDATE_SUCCESS,
            payload:data.message
        });
    } catch (e) {
        dispatch({
            type:USER_UPDATE_FAIL,
            payload:e.response && e.response.data.message ? e.response.data.message :e.message
        });
    }
}

const user_delete=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:USER_DELETE_REQUEST,
            payload:id
        });
        
        const { data } = await Axios.delete("/api/user/user_delete/"+id+"");
        dispatch({
            type:USER_DELETE_SUCCESS,
            payload:data.message
        })
    } catch (e) {
        dispatch({
            type:USER_DELETE_FAIL,
            payload:e.response && e.response.data.message ? e.response.data.message : e.message
        });
    }
} 
export {user_entry,user_update,user_delete,userlist_get};
