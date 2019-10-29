import { GET_UPDATE } from "../constants"

const getUpdate = (state = {}, action) => {

    switch (action.type) {
        case GET_UPDATE:
            return Object.assign({}, state, {
                data : action.data
            })
        default:
            return state

    }
}
export default getUpdate