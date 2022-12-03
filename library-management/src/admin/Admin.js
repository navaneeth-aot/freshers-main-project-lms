import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate, Outlet } from "react-router-dom";
import Sidebar from './Sidebar';



export default function Admin() {
  return (
        <div className='d-flex'>
            <Sidebar />
            <Outlet/>
        </div>
  )
}
