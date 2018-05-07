const ACTION_TOGGLE_MENU_STATUS = 'ACTION_TOGGLE_MENU_STATUS'
const ACTION_SET_MENU_STATUS = 'ACTION_SET_MENU_STATUS'

function toggleStatus(status) {
    return {
        type: ACTION_TOGGLE_MENU_STATUS,
        status: status,
    }
}

function setStatusMenu(status) {
    return {
        type: ACTION_SET_MENU_STATUS,
        status: status,
    }
}

export {
    toggleStatus,
    setStatusMenu,
    ACTION_TOGGLE_MENU_STATUS,
    ACTION_SET_MENU_STATUS
}

