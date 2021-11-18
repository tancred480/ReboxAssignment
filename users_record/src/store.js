import  {   userEntryReducer,
            userUpdateReducer,
            userDeleteReducer,
            userListReducer
 } from "./reducers/userReducer";
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { userlist_get } from "./actions/userActions";
const initialState={};
const reducer=combineReducers({
    userEntry:userEntryReducer,
    userUpdate:userUpdateReducer,
    userDelete:userDeleteReducer,
    userList:userListReducer
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export  default store ;