import {createStore,applyMiddleware} from "redux";
import logger from 'redux-logger';
import rootReducer from '../redux/root.reducer';
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./root.saga";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// const middlewares=[thunk]
const middlewares=[sagaMiddleware]
if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}
export  const  store =createStore(rootReducer,applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)
export default store;
