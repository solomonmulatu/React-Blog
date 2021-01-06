import {combineReducers} from "redux";
import blogReducer from "./blog/blog.reducer";
import userReducer from"./user/user.reducers"


const  rootReducer= combineReducers({
    blog:blogReducer,
    user:userReducer

});

export default rootReducer;