import React,{useState} from 'react';
import Students from './Students';
import StudentSearch from './StudentSearch';


export const StudentContext = React.createContext()
export const StudentArrayContext = React.createContext()

function StudentPage() {
  const [students, setstudents] = useState([])
  return (
    <div className='col-md-10 p-5 backcolor'>
      <StudentArrayContext.Provider value = { setstudents }>
        <StudentContext.Provider value = { students }>
          <StudentSearch />
          <Students />
        </StudentContext.Provider>
      </StudentArrayContext.Provider>
      
        
    </div>
  )
}

export default StudentPage