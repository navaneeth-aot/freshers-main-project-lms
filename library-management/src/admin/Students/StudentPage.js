import React, { useState } from 'react';
import Students from './Students';
import StudentSearch from './StudentSearch';



function StudentPage() {
  const [search, setsearch] = useState("")

  return (
    <div className='col-md-10 p-5 backcolor'>
      <StudentSearch setsearch={setsearch}/>
      <Students search={search}/>
    </div>
  )
}

export default StudentPage