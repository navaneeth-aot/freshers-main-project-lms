import './App.css';
import Login from './Login/Login';
import './App.js';
import React, {useState,useEffect} from 'react';
import Admin from './admin/Admin';
import Student from './student/Student';
import { Link, Navigate, redirect, Route, Router, Routes } from 'react-router-dom';
import ReactDOM from "react-dom";

export const StudentContext = React.createContext()
export const StudentArrayContext = React.createContext()
export const BooksContext = React.createContext()
export const BooksArrayContext = React.createContext()

function App() {
  const StudentArray = JSON.parse(localStorage.getItem('studentsKey')) || [];
  const BooksArray = JSON.parse(localStorage.getItem('booksKey')) || [];
  const [key, setKey] = useState('admin');
  const [authentication, setauthentication] = useState(false);
  const [students, setstudents] = useState(StudentArray);
  const [books, setbooks] = useState(BooksArray);

  useEffect(() => {
    const students = JSON.parse(localStorage.getItem('studentsKey'));
    if (students) {
      setstudents(students);
    }
  }, []);

  useEffect(() => {
      localStorage.setItem('studentsKey', JSON.stringify(students));
  }, [students]);


  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('booksKey'));
    if (books) {
      setbooks(books);
    }
  }, []);

  useEffect(() => {
      localStorage.setItem('booksKey', JSON.stringify(books));
  }, [books]);

  


  return (
      <div>
        <StudentArrayContext.Provider value = { setstudents }>
          <StudentContext.Provider value = { students }>
            <BooksContext.Provider value = { books }>
              <BooksArrayContext.Provider value = { setbooks }>
                  <Routes>
                    <Route path="/" element={ <Navigate replace to="/login" />} />
                    {
                    (key == "admin") &&
                      <Route path="/login" element={authentication == !true ? 
                      <Login setauthentication={setauthentication} authentication={authentication} login={key} setlogin={setKey} students={students}/> : 
                      <Admin />} />
                    }
                    {
                    (key == "student") &&
                      <Route path="/login" element={authentication == !true ? 
                      <Login setauthentication={setauthentication} authentication={authentication} login={key} setlogin={setKey} students={students}/> : 
                      <Student />} />
                    }
                  </Routes>
              </BooksArrayContext.Provider>
            </BooksContext.Provider>
          </StudentContext.Provider>
        </StudentArrayContext.Provider>    
      </div>
  );
}

export default App;
