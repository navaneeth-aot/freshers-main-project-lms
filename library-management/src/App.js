import './App.css';
import Login from './Login/Login';
import './App.js';
import {useState} from 'react';
import Admin from './Admin';

function App() {
const [authentication, setauthentication] = useState(false)

  return (
      <div>
        {authentication == false ? <Login setauthentication={setauthentication} authentication={authentication}/>:<Admin />}
      </div>
  );
}

export default App;
