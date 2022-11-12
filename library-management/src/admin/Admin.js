import React from 'react';
import Contents from './Contents';
import Sidebar from './Sidebar';


export default function Admin() {
  return (
        <div className='d-flex'>
            <Sidebar />
            <Contents />
        </div>
  )
}
