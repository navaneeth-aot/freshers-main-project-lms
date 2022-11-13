import React from 'react'
import { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { FiEye,FiTrash2 } from 'react-icons/fi';

function StudentList() {
    const [students, setstudents] = useState([
        {key: 1 , name:"Nitha Samuel",mail:"nithasamuel@gmail.com"},
        {key: 2 , name:"Anjali Thomas", mail:"anjali.t@hotmail.com"},
        {key: 3 , name:"Rahul S", mail:"srahul@gmail.com"},
        {key: 4 , name:"Roshan Philip", mail:"roshan.philip@gmail.com"},
        {key: 5 , name:"John Doe",mail:"doe.john@hotmail.com"},
        {key: 6 , name:"Maylor Smith", mail:"mayorsmith@gmail.com"}
    ])
  return (

    students.map((student)=>{
        return(
            <div key={student.key} className="d-flex justify-content-between px-2 py-3 border-bottom">
                <div className='col-5'> {student.name} </div>
                <div className='col-5'> {student.mail} </div>
                <div className='col-2 d-flex gap-3 ms-4 ps-2'>
                    <MdEdit className='grey'/>
                    <FiTrash2 className='red'/>
                    <FiEye className='grey'/>
                </div>
            </div>
        )
    })
  )
}

export default StudentList