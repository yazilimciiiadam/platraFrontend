import getUpdateReducer from "./getUpdateReducer"
import viewReducer from "./viewReducer"
import getOperation from "./getOperation"
import {combineReducers} from "redux"


const reducers = combineReducers({
    getUpdateReducer,
    viewReducer,
    getOperation
})

export default reducers