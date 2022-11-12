import React from 'react';
import Students from './Students';
import StudentSearch from './StudentSearch';

function Contents() {
  return (
    <div className='col-md-10 p-5 backcolor'>
        <StudentSearch />
        <Students />
    </div>
  )
}

export default Contents