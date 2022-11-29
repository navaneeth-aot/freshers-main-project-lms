import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GoSearch } from 'react-icons/go';
import ModalIssueBook from './ModalIssueBook';

function IssueSearch({ setsearch }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleSearch = (e) =>  setsearch(e.target.value) 

  return (
    <>
    <h4 className='fw-bold blue'>Issued Books</h4>
    <hr></hr>
    <div className='d-flex mt-5 justify-content-between'>
        <form className='col-md-6'>
            <div className='d-flex align-items-center border rounded bg-white pe-3'>
                <Form.Control type="text" placeholder="Search by book title or student" className='border-0 montserrat' onChange={handleSearch} />
                <GoSearch className='grey'/> 
            </div> 
            
        </form>
        <Button className='col-2' onClick={handleShow}>Issue Book</Button>
        <ModalIssueBook show={show} setShow={setShow}/>
    </div>
    </>
  )
}

export default IssueSearch