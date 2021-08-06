import logo from './logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ComputerIcon from '@material-ui/icons/Computer';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <ComputerIcon/>
          <Typography variant="h6" color="inherit" noWrap>
            Hello App
          </Typography>
        </Toolbar>
      </AppBar> 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" height= {100} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        </div>
    </div>
  );
}

export default App;
