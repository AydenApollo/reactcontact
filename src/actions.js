export function add_contact (data) {
    return {
        type: 'ADD_TO_LIST',
        data: data
    }
}

export function delete_contact (key) {
    return {
        type: 'DELETE_FROM_LIST',
        data: key
    }
}