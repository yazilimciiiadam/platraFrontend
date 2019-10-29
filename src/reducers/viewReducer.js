import { SHOW_DATA } from "../constants"

const initialState = {
    isMap: false,
    buttonText:"Harita Görünümü"
}

const changeView = (state = initialState, action) => {

    

    switch (action.type) {

        case SHOW_DATA:
            return Object.assign({}, state, {
                isMap: !action.isMap,
                buttonText : !action.isMap ? "Tablo Görünümü" : "Harita Görünümü"
            })
        default:
            console.log("Initial State")
            return state
    }

}



export default changeView