import './App.css';
import Login from './Login/Login';
import './App.js';
import {useState} from 'react';
import Admin from './admin/Admin';
import Student from './student/Student';

function App() {
  const [key, setKey] = useState('admin');
  const [authentication, setauthentication] = useState(false);

  return (
      <div>
        {(key == "admin") &&
          (authentication == !true ? <Login setauthentication={setauthentication} authentication={authentication} login={key} setlogin={setKey} /> : <Admin />)}
          
        {(key == "student") &&
          (authentication == !true ? <Login setauthentication={setauthentication} authentication={authentication} login={key} setlogin={setKey} /> : <Student />)}
          
      </div>
  );
}

export default App;
