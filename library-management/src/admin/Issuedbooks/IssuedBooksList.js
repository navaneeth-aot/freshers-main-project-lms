import React from 'react';
import { useState } from 'react';
import { MdOutlineAssignmentReturn } from 'react-icons/md';

function IssuedBooksList() {
    const [issued, setissued] = useState([
        {key: 1 , title:"It Start With Us",name:"Nitha Samuel",IssueDate:"02-11-2022",DueDate:"09-11-2022",fine:"10"},
        {key: 1 , title:"It Start With Us",name:"Nitha Samuel",IssueDate:"02-11-2022",DueDate:"09-11-2022",fine:"10"}
    ])
  return (
    issued.map((book)=>{
        return(
            <div key={issued.key} className="d-flex justify-content-between px-2 py-3 border-bottom">
                <div className='col-2'>{book.title}</div>
                <div className='col-2'>{book.name}</div>
                <div className='col-2'>{book.IssueDate}</div>
                <div className='col-2'>{book.DueDate}</div>
                <div className='col-2 ps-5'>{book.fine}</div>
                <div className='col-2 text-center'><MdOutlineAssignmentReturn className='grey'/></div>
            </div>
        )
    })
  )
}

export default IssuedBooksList