import { createStore } from 'redux';

import contacts_reducer from './reducers.js';

var store = createStore(contacts_reducer);

export default store;