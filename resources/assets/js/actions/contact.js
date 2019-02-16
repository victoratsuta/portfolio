const ACTION_UPDATE_CONTACT = 'ACTION_UPDATE_CONTACT'

export default function getAction(fieldName, value) {
    return {
        type: ACTION_UPDATE_CONTACT,
        fieldName: fieldName,
        value: value
    }
}

export {
    ACTION_UPDATE_CONTACT
}

