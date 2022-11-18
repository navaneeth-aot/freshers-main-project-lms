import './App.css';
import Login from './Login/Login';
import './App.js';
import React, {useState,useEffect} from 'react';
import Admin from './admin/Admin';
import Student from './student/Student';
import { Link, Navigate, redirect, Route, Router, Routes } from 'react-router-dom';
import IssuedBooksPage from './admin/Issuedbooks/IssuedBooksPage';
import AllbooksPage from './admin/Allbooks/AllbooksPage';
import StudentPage from './admin/Students/StudentPage';

export const StudentContext = React.createContext()
export const StudentArrayContext = React.createContext()
export const BooksContext = React.createContext()
export const BooksArrayContext = React.createContext()
export const IssuedBooksContext = React.createContext()
export const IssuedBooksArrayContext = React.createContext()

function App() {
  const StudentArray = JSON.parse(localStorage.getItem('studentsKey')) || [];
  const BooksArray = JSON.parse(localStorage.getItem('booksKey')) || [];
  const IssuedBookArray = JSON.parse(localStorage.getItem('IssuedBookKey')) || [];
  const [key, setKey] = useState('admin');
  const [authentication, setauthentication] = useState(false);
  const [students, setstudents] = useState(StudentArray);
  const [books, setbooks] = useState(BooksArray);
  const [IssuedBook, setIssuedBook] = useState(IssuedBookArray);

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


  useEffect(() => {
    const IssuedBook = JSON.parse(localStorage.getItem('IssuedBookKey'));
    if (IssuedBook) {
      setIssuedBook(IssuedBook);
    }
  }, []);

  useEffect(() => {
      localStorage.setItem('IssuedBookKey', JSON.stringify(IssuedBook));
  }, [IssuedBook]);

  


  return (
      <div>
        <StudentArrayContext.Provider value = { setstudents }>
          <StudentContext.Provider value = { students }>
            <BooksContext.Provider value = { books }>
              <BooksArrayContext.Provider value = { setbooks }>
                <IssuedBooksArrayContext.Provider value = { setIssuedBook }>
                  <IssuedBooksContext.Provider value = { IssuedBook }>
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
                      <Route path='/' element={<Admin />}>
                      <Route path='/issuedbooks' element = {<IssuedBooksPage/>} />
                      <Route path='/allbooks' element = {<AllbooksPage />} />
                      <Route path="/studentspage" element = {<StudentPage />} />
                      </Route>
                    </Routes>
                  </IssuedBooksContext.Provider>
                </IssuedBooksArrayContext.Provider>
              </BooksArrayContext.Provider>
            </BooksContext.Provider>
          </StudentContext.Provider>
        </StudentArrayContext.Provider>    
      </div>
  );
}

export default App;
