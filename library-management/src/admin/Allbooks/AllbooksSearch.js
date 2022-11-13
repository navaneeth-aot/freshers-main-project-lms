import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GoSearch } from 'react-icons/go';
import Example from './ModalAddStudent';

function AllbooksSearch() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <h4>All Books</h4>
    <hr></hr>
    <div className='d-flex mt-5 justify-content-between'>
        <form className='col-md-6'>
            <div className='d-flex align-items-center border rounded bg-white pe-3'>
                <Form.Control type="text" placeholder="Search by book title or author " className='border-0' />
                <GoSearch/> 
            </div> 
            
        </form>
        <Button className='col-2' onClick={handleShow}>Add New Book</Button>
        <Example show={show} setShow={setShow}/>
    </div>
    </>
  )
}

export default AllbooksSearch