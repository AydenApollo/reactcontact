
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ComputerIcon from '@material-ui/icons/Computer';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Button } from '@material-ui/core';

import Contacts from './contacts.js'
import AddContact from './addContacts.js'
import DeleteContact from './deleteContacts.js'

import store from './store.js'
import { Provider } from 'react-redux';


const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <AppBar position="relative">
        <Toolbar>
          <ComputerIcon/>
          <Typography variant="h6" color="inherit" noWrap>
            <Link to='/'>Hello There</Link>
          </Typography>
        </Toolbar>
      </AppBar> 
      <div className="App">
        <Switch>
          <Route exact path='/'component={Contacts}/>
          <Route path='/add' component={AddContact}/>
          <Route path='/delete/:key' component={DeleteContact}/>
          <Route component={NoMatch}/>
        </Switch>
        </div>
        </BrowserRouter>
        </Provider>
        </div>
  );
}

export default App;
