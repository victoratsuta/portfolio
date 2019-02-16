import {ACTION_SET_PRELOADER_STATUS} from './../actions/preloader'

const initialState = {
    preloader: false,
}

function preloaderReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_SET_PRELOADER_STATUS : {

            // console.log(action)

            return {preloader: action.preloader}
        }
            break

        default:
            return state
    }
}

export default preloaderReducer
