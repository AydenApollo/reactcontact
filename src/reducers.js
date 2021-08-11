import deepcopy from 'deepcopy';

var initialState = {
    initial_contacts:[
    {name: 'BigBoy', city: 'Gastrogasm', state: 'Texas'},
    {name: 'BeastyBaddie', city: 'PantryRaiders', state: 'North Dakota'},
    {name: 'HungryHippo', city: 'SoggyDough', state: 'Wyoming'}
]
};
export function contacts_reducer (state, action) {
    if (state === undefined) {
        return initialState
    }
}


export default contacts_reducer