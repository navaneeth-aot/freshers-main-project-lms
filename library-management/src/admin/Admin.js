import React from 'react';
import { BrowserRouter as Outlet } from "react-router-dom";
import Sidebar from './Sidebar';



export default function Admin() {
  return (
        <div className='d-flex'>
            <Sidebar />
            <Outlet/>
        </div>
  )
}
