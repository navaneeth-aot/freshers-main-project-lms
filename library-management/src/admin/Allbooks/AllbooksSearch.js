import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GoSearch } from 'react-icons/go';
import ModalAllbooks from './ModalAllbooks';

function AllbooksSearch({setsearch}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleSearch = (e) => {setsearch(e.target.value)}
  const [BookEditFlag, setBookEditFlag] = useState(false)
  return (
    <>
    <h4 className='fw-bold blue'>All Books</h4>
    <hr></hr>
    <div className='d-flex mt-5 justify-content-between'>
        <form className='col-md-6'>
            <div className='d-flex align-items-center border rounded bg-white pe-3'>
                <Form.Control type="text" placeholder="Search by book title or author " className='border-0' onChange={handleSearch}/>
                <GoSearch className='grey'/> 
            </div> 
        </form>
        <Button className='col-2' onClick={handleShow}>Add New Book</Button>
        <ModalAllbooks show={show} setShow={setShow} setBookEditFlag={setBookEditFlag} BookEditFlag={BookEditFlag}/>
    </div>
    </>
  )
}

export default AllbooksSearch