import React from 'react';
import Form from 'react-bootstrap/Form';
import { GoSearch } from 'react-icons/go';

function MyBooksSearch({setsearch,setsortValue}) {
  const handleSearch = (e) => {setsearch(e.target.value)};
  const handleSort = (e) => {setsortValue(e.target.value)};

  return (
    <>
    <h4 className='fw-bold blue'>My Books</h4>
    <hr></hr>
    <div className='d-flex my-5 justify-content-between col-12'>
        <form className='col-5'>
            <div className='d-flex align-items-center border rounded bg-white pe-3'>
                <Form.Control type="text" placeholder="Search by book title or author " className='border-0' onChange={handleSearch}/>
                <GoSearch className='grey'/> 
            </div>
        </form>
        <div className='col-2 d-flex text-nowrap align-items-center gap-2'>
        Sort By :
          <Form.Select aria-label="Default select example" onChange={handleSort}>
            <option>Select</option>
            <option value="1">Issue Date</option>
            <option value="2">Due Date</option>
          </Form.Select>
        </div>
    </div>
    </>
  )
}

export default MyBooksSearch