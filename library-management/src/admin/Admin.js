import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';



export default function Admin() {
  return (
        <div className='d-flex'>
            <Sidebar />
            <Outlet/>
        </div>
  )
}
