import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import { GoSearch } from 'react-icons/go';

function AllbooksSearch({setsearch}) {
  const handleSearch = (e) => {setsearch(e.target.value)}

  return (
    <>
    <h4 className='fw-bold blue'>Issued Books</h4>
    <hr></hr>
    <div className='d-flex mt-5 justify-content-between'>
        <form className='col-md-6'>
            <div className='d-flex align-items-center border rounded bg-white pe-3'>
                <Form.Control type="text" placeholder="Search by book title or author " className='border-0' onChange={handleSearch}/>
                <GoSearch className='grey'/> 
            </div> 
        </form>
    </div>
    </>
  )
}

export default AllbooksSearch