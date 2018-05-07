import {ACTION_TOGGLE_MENU_STATUS, ACTION_SET_MENU_STATUS} from './../actions/menu'

const initialState = {
    status: false,

}

function menuReducer(state = initialState, action) {

    switch (action.type){
        case ACTION_SET_MENU_STATUS : {
            return {status : action.status}
        }
        break
        case ACTION_TOGGLE_MENU_STATUS : {
            return {status : !action.status}
        }
            break

        default:
            return state
    }
}

export default menuReducer
