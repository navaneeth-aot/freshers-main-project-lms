import React from 'react';
import StudentList from './StudentList';

function List({search}) {
  return (
    <div className='box mt-4 bg-white px-5 border-box rounded'>
        <div className="d-flex justify-content-between px-2 py-3 border-bottom grey">
                <div className='col-5'>Name</div>
                <div className='col-5'>Email</div>
                <div className='col-2 ms-5'>Actions</div>
        </div>
        <StudentList search={search}/>
    </div>
  )
}

export default List