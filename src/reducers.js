import deepcopy from 'deepcopy';

var initialState = {
    initial_contacts:[
    {name: 'Big Boy', email: 'iambigboy@touchmybelly.com', phone:'420-6969', address: '0000 My Place', city: 'Gastrogasm', state: 'Texas', zip: '00001'},
    {name: 'Beasty Baddie', email: 'callmebeast@beast.com', phone: '420-6969', address: '0000 My Place', city: 'Pantry Raiders', state: 'North Dakota', zip: '00001'},
    {name: 'Hungry Hippo', email: 'igotback@booty.com', phone: '420-6969', address: '0000 My Place', city: 'Soggy Dough', state: 'Wyoming', zip: '00001'}
]
};
export function contacts_reducer (state, action) {
    console.log(action)
    if (state === undefined) {
        return initialState
    }
    let new_contact_state = deepcopy(state);
    if (action.type === 'ADD_TO_LIST') {
        new_contact_state.initial_contacts.push(action.data)
       
    }
    let delete_Contact = deepcopy(state)
    if (action.type === 'DELETE_FROM_LIST') {
        return delete_Contact
    }
    console.log(new_contact_state)
    return new_contact_state
}


export default contacts_reducer