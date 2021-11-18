import {USER_ENTRY_REQUEST,USER_ENTRY_SUCCESS,USER_ENTRY_FAIL,
        USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS,USER_UPDATE_FAIL,
        USER_DELETE_REQUEST,USER_DELETE_SUCCESS,USER_DELETE_FAIL, USERLIST_GET_REQUEST, USERLIST_GET_SUCCESS, USERLIST_GET_FAIL
} from "../constants/userConstant.js";

export const userEntryReducer=(state={},action)=>{
    switch(action.type){
        case USER_ENTRY_REQUEST:
            return {
                user_entry_loading:true,
            }
        case USER_ENTRY_SUCCESS:
            return {
                user_entry_loading:false,
                user_entry_payload:action.payload
            }
        case USER_ENTRY_FAIL:
            return {
                user_entry_loading:false,
                user_entry_error:action.payload,
            }
        default : return state;
    }
}

export const userUpdateReducer=(state={},action)=>{
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return{
                user_update_loading:true
            };
        case USER_UPDATE_SUCCESS:
            return{
                user_update_loading:false,
                user_update_payload:action.payload
            };
        case USER_UPDATE_FAIL:
            return{
                user_update_loading:false,
                user_update_error:action.payload
            };
        default:
             return state;
    }
}

export const userDeleteReducer=(state={},action)=>{
    switch(action.type){
        case USER_DELETE_REQUEST:
            return {
                user_delete_loading:true
            };
        case USER_DELETE_SUCCESS:
            return {
                user_delete_loading:false,
                user_delete_payload:action.payload
            };
        case USER_DELETE_FAIL:
            return {
                user_delete_loading:false,
                user_delete_error:action.payload
            };
        default :return state;
    }
}

export const userListReducer=(state={},action)=>{
    switch(action.type){
        case USERLIST_GET_REQUEST:
            return {
                userlist_get_loading:true
            };
        case USERLIST_GET_SUCCESS:
            return {
                userlist_get_loading:false,
                userlist_get_payload:action.payload
            };
        case USERLIST_GET_FAIL:
            return {
                userlist_get_loading:false,
                userlist_get_error:action.payload
            };
        default :return state;
    }
}