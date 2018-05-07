const ACTION_SET_PRELOADER_STATUS = 'ACTION_SET_PRELOADER_STATUS'

function setStatus(status) {
    return {
        type: ACTION_SET_PRELOADER_STATUS,
        preloader: status,
    }
}

export {
    setStatus,
    ACTION_SET_PRELOADER_STATUS
}

