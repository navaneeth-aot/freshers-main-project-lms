import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import IssuedBooksPage from './Issuedbooks/IssuedBooksPage';
import AllbooksPage from './Allbooks/AllbooksPage';
import StudentPage from './Students/StudentPage';



export default function Admin() {
  return (
        <div className='d-flex'>
            
            <Sidebar />
            <Routes>
              <Route path='issuedbooks' element = {<IssuedBooksPage/>} />
              <Route path="allbooks" element = {<AllbooksPage />} />
              <Route index element = {<StudentPage />} />
            </Routes>
            
        </div>
  )
}
