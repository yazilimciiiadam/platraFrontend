import { SHOW_DATA } from "../constants"
import {GET_UPDATE} from "../constants"
import {GET_OPERATION} from "../constants"

export const showData = (value) => {
    console.log("Action Returned")
    return {
        type: SHOW_DATA,
        isMap:value
    }

}

export const getUpdate = (value) => {

    return{
        type:GET_UPDATE,
        data:value
    }
}

export const getOperation = (value) => {

    return{
        type:GET_OPERATION,
        data:value,
        operation:true
    }
}
