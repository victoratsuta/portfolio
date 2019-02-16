import {ACTION_SET_PAGE, ACTION_RELOAD_PAGE} from './../actions/page'
import {URLS} from './../constants/urls'

const path = window.location.href.split('/')[3].split('#')
let page = path[1] ? path[1] : path[0]

const initialState = {
    page: page ? page : URLS.main,
    statusReload: false
}

function pageReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_SET_PAGE : {
            return Object.assign({}, state, {
                page: action.page ? action.page : 'main'
            })
        }
            break
        case ACTION_RELOAD_PAGE : {

            return Object.assign({}, state, {
                statusReload: action.statusReload
            })

        }
            break

        default:
            return state
    }
}

export default pageReducer
