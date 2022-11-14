import React,{useContext} from 'react'
import { MdEdit } from 'react-icons/md';
import { FiEye,FiTrash2 } from 'react-icons/fi';
import { StudentContext , StudentArrayContext } from './StudentPage';



function StudentList() {
    const Student = useContext(StudentContext);
    const setStudents = useContext(StudentArrayContext);
    

  return (
    Student.map((Students)=>{
        return(
            <div key={Students.key} className="d-flex justify-content-between px-2 py-3 border-bottom">
                <div className='col-5'> {Students.name} </div>
                <div className='col-5'> {Students.Email} </div>
                <div className='col-2 d-flex gap-3 ms-4 ps-2'>
                    <MdEdit className='grey'/>
                    <FiTrash2 className='red' onClick={() => {deleteStudent(Students.key)} }/>
                    <FiEye className='grey'/>
                </div>
            </div>
        )
    })
  )
}

export default StudentList