import './App.css';
import Login from './Login/Login';
import './App.js';
import React, {useState,useEffect} from 'react';
import Admin from './admin/Admin';
import Student from './student/Student';
import { Navigate, Route,Routes } from 'react-router-dom';
import IssuedBooksPage from './admin/Issuedbooks/IssuedBooksPage';
import AllbooksPage from './admin/Allbooks/AllbooksPage';
import StudentPage from './admin/Students/StudentPage';
import ViewDetails from './admin/ViewDetails';
import MyBooks from './student/MyBooks/MyBooks';
import MyIssuedBooks from './student/MyIssuedBooks/MyIssuedBooks';

export const StudentContext = React.createContext()
export const StudentArrayContext = React.createContext()
export const BooksContext = React.createContext()
export const BooksArrayContext = React.createContext()
export const IssuedBooksContext = React.createContext()
export const IssuedBooksArrayContext = React.createContext()
export const SetParamsContext = React.createContext()

function App() {
  const StudentArray = JSON.parse(localStorage.getItem('studentsDB')) || [];
  const BooksArray = JSON.parse(localStorage.getItem('booksDB')) || [];
  const IssuedBookArray = JSON.parse(localStorage.getItem('IssuedBookDB')) || [];
  const StudentID = JSON.parse(sessionStorage.getItem('StudentID')) || "";
  const [key, setKey] = useState('admin');
  const [students, setstudents] = useState(StudentArray);
  const [books, setbooks] = useState(BooksArray);
  const [IssuedBook, setIssuedBook] = useState(IssuedBookArray);
  const [id, setid] = useState(StudentID);

  useEffect(() => {
    const id = JSON.parse(sessionStorage.getItem('StudentID'));
    if (id) {
      setid(id);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('StudentID', JSON.stringify(id));
  }, [id]);

  useEffect(() => {
    const students = JSON.parse(localStorage.getItem('studentsDB'));
    if (students) {
      setstudents(students);
    }
  }, []);

  useEffect(() => {
      localStorage.setItem('studentsDB', JSON.stringify(students));
  }, [students]);


  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('booksDB'));
    if (books) {
      setbooks(books);
    }
  }, []);

  useEffect(() => {
      localStorage.setItem('booksDB', JSON.stringify(books));
  }, [books]);


  useEffect(() => {
    const IssuedBook = JSON.parse(localStorage.getItem('IssuedBookDB'));
    if (IssuedBook) {
      setIssuedBook(IssuedBook);
    }
  }, []);

  useEffect(() => {
      localStorage.setItem('IssuedBookDB', JSON.stringify(IssuedBook));
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
                        <Route path="/login" element={<Login setuser={setid} login={key} setlogin={setKey} students={students}/>} />
                        <Route path='/' element={<Admin />}>
                          <Route element= {<Navigate replace to="/issuedbooks" /> } />
                          <Route path='/issuedbooks' element = {<IssuedBooksPage/>} />
                          <Route path='/allbooks' element = {<AllbooksPage />} />
                          <Route path="/studentspage" element = {<StudentPage />} />
                          <Route path={`/Studentsdetails/:id`} element = {<ViewDetails />} />
                        </Route>
                        <Route path = '/' element={<Student user={id} />}>
                          <Route element= {<Navigate replace to="/myBooks" /> } />
                          <Route path='/myBooks' element={<MyBooks />}/>
                          <Route path='/myIssuedBooks' element={<MyIssuedBooks />}/>
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
