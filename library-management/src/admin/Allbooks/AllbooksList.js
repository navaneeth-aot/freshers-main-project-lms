import React from 'react'
import { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';

function AllbooksList() {
    const [books, setbooks] = useState([{key:"1",title:"It Start With Us",author:"Colleen Hoover",language:"English",total:"5",remaining:"2"},
        {key:"2",title:"It Start With Us",author:"Colleen Hoover",language:"English",total:"5",remaining:"2"}])
  return (

    books.map((book)=>{

        return(
            <div key={books.key} className="d-flex justify-content-between px-2 py-3 border-bottom">
                <div className='col-2'>{ book.title }</div>
                <div className='col-2'>{ book.author }</div>
                <div className='col-2'>{ book.language }</div>
                <div className='col-2 ps-4 ms-2'>{ book.total }</div>
                <div className='col-2 ps-4'>{ book.remaining }</div>
                <div className='col-2 d-flex gap-3 ps-5'>
                    <MdEdit className='grey'/>
                    <FiTrash2 className='red'/>
                </div>
            </div>
        )
    })
  )
}

export default AllbooksList