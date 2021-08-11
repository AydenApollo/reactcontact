import deepcopy from 'deepcopy';

var initialState = {
    initial_contacts:[
    {name: 'Big Boy', city: 'Gastrogasm', state: 'Texas'},
    {name: 'Beasty Baddie', city: 'Pantry Raiders', state: 'North Dakota'},
    {name: 'Hungry Hippo', city: 'Soggy Dough', state: 'Wyoming'}
]
};
export function contacts_reducer (state, action) {
    if (state === undefined) {
        return initialState
    }
}


export default contacts_reducer