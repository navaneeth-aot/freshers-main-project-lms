import './App.css';
import Login from './Login/Login';
import './App.js';
import React, {useState} from 'react';
import Admin from './admin/Admin';
import Student from './student/Student';
import { Link, Route, Router, Routes } from 'react-router-dom';

export const StudentContext = React.createContext()
export const StudentArrayContext = React.createContext()
export const BooksContext = React.createContext()
export const BooksArrayContext = React.createContext()

function App() {
  const [key, setKey] = useState('admin');
  const [authentication, setauthentication] = useState(false);
  const [students, setstudents] = useState([{key: 1 , name:"Nitha Samuel",Email:"nithasamuel@gmail.com"}]);
  const [books, setbooks] = useState([{key:"1",title:"It Start With Us",author:"Colleen Hoover",language:"English",total:"5",remaining:"2"}]);

  return (
      <div>
        <StudentArrayContext.Provider value = { setstudents }>
          <StudentContext.Provider value = { students }>
            <BooksContext.Provider value = { books }>
              <BooksArrayContext.Provider value = { setbooks }>
                  {(key == "admin") &&
                    (authentication == !true ? 
                    <Login setauthentication={setauthentication} authentication={authentication} login={key} setlogin={setKey} /> : 
                    <Admin />)}
                
                  {(key == "student") &&
                    (authentication == !true ? 
                    <Login setauthentication={setauthentication} authentication={authentication} login={key} setlogin={setKey} /> :
                    <Student />)}
              </BooksArrayContext.Provider>
            </BooksContext.Provider>
          </StudentContext.Provider>
        </StudentArrayContext.Provider>    
      </div>
  );
}

export default App;
