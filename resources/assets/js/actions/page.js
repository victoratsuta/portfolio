const ACTION_SET_PAGE = 'ACTION_SET_PAGE'
const ACTION_RELOAD_PAGE = 'ACTION_RELOAD_PAGE'

function setPage(name) {
    return {
        type: ACTION_SET_PAGE,
        page: name,
    }
}

function reloadPage(statusReload) {
    return {
        type: ACTION_RELOAD_PAGE,
        statusReload: statusReload
    }
}

export {
    setPage,
    reloadPage,
    ACTION_SET_PAGE,
    ACTION_RELOAD_PAGE,
}

