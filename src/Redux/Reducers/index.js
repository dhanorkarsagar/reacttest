import { combineReducers } from "redux";
import {SaveLoginReducer} from  "./LoginReducer"

export const reducers=combineReducers({
    loginDetails:SaveLoginReducer
})