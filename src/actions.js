export function add_contact (data) {
    console.log('should add contact', data)
    return {
        type: 'ADD_TO_LIST',
        data: data
    }
}

export function deleteContact (key) {
    return {
        type: 'DELETE_FROM_LIST',
        key: key
    }
}