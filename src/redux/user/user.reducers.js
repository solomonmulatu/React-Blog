import {UserActionTypes} from "./user.types";

const INITIAL_STATE={
    currentUser:[],
    error:null
}
 const userReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case UserActionTypes.CREATE_USER_SUCCESS:
            return{
                ...state,
                currentUser:action.payload,
                error: null
            }
        case UserActionTypes.CREATE_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
export  default userReducer;