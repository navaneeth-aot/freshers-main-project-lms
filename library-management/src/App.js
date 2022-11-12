import './App.css';
import Login from './Login/Login';
import './App.js';
import {useState} from 'react';
import Admin from './admin/Admin';

function App() {
const [authentication, setauthentication] = useState(false);

  return (
      <div>
        {authentication == !true ? <Login setauthentication={setauthentication} authentication={authentication}/>:<Admin />}
      </div>
  );
}

export default App;
