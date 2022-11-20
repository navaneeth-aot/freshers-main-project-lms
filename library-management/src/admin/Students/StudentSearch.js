import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GoSearch } from 'react-icons/go';
import ModalAddStudent from './ModalAddStudent';


function StudentSearch({setsearch}) {

  const [show, setShow] = useState(false);
  const [editFlag, seteditFlag] = useState(false);

  const handleShow = () => setShow(true);
  const handleSearch = (e) => {setsearch(e.target.value)}

  return (
    <>
    <h4>Students</h4>
    <hr></hr>
    <div className='d-flex mt-5 justify-content-between'>
        <form className='col-md-6'>
            <div className='d-flex align-items-center border rounded bg-white pe-3'>
                <Form.Control type="text" placeholder="Search by student name or email" className='border-0' onChange={handleSearch}/>
                <GoSearch className='grey'/> 
            </div> 
            
        </form>
        <Button className='col-2' onClick={handleShow}>Add New Student</Button>
        <ModalAddStudent show={show} setShow={setShow} editFlag={editFlag} seteditFlag={seteditFlag}/>
    </div>
    </>
  )
}

export default StudentSearch