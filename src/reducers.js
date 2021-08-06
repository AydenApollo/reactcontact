import deepcopy from 'deepcopy';

var initialState = [
    {name: 'BigBoy', city: 'Gastrogasm', state: 'Texas'},
    {name: 'HungryHippo', city: 'SoggyDough', state: 'Wyoming'},
    {name: 'BeastyBaddie', city: 'PantryRaiders', state: 'North Dakota'}
];
export function contacts (state) {
    if (state == undefined) {
        return initialState
    }
}