import { GET_OPERATION } from "../constants"


const initialState = {
    data: {},
    operation:false
}

const getOperation = (state = initialState, action) => {

    switch (action.type) {
        case GET_OPERATION:
            
            return Object.assign({}, state, {
                data : action.data,
                operation : action.operation
            })
        default:
            return state

    }
}
export default getOperation