import deepcopy from 'deepcopy';

var initialState = {
    initial_contacts:[
    {name: 'Big Boy', email: 'iambigboy@touchmybelly.com', phone:'420-6969', address: '0000 My Place', city: 'Gastrogasm', state: 'Texas', zip: '00001'},
    {name: 'Beasty Baddie', email: 'callmebeast@beast.com', phone: '420-6969', address: '0000 My Place', city: 'Pantry Raiders', state: 'North Dakota', zip: '00001'},
    {name: 'Hungry Hippo', email: 'igotback@booty.com', phone: '420-6969', address: '0000 My Place', city: 'Soggy Dough', state: 'Wyoming', zip: '00001'}
]
};
export function contacts_reducer (state, action) {
    if (state === undefined) {
        return initialState
    }
    let new_contact_state = deepcopy(state);
    if (actoin.type === 'ADD_TO_LIST') {
        new_contact_state.initial_contacts.push({name: action.data.name})
        new_contact_state.initial_contacts.push({email: action.data.email})
        new_contact_state.initial_contacts.push({phone: action.data.phone})
        new_contact_state.initial_contacts.push({address: action.data.address})
        new_contact_state.initial_contacts.push({city: action.data.city})
        new_contact_state.initial_contacts.push({state: action.data.state})
        new_contact_state.initial_contacts.push({zip: action.data.zip})
    }
}


export default contacts_reducer