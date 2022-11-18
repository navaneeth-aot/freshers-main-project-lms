import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({show,setShow,setprimarykey,primarykey,Student,setStudents,bookFlag,setbookFlag,setbooks,books}) {
  

  const handleClose = () => {setShow(false);setbookFlag(false)}

  const handleStudentDelete = () => { 
        setStudents(Student.filter((students) => students.key != primarykey));
        handleClose()
        setprimarykey('')
     }

  const deletebook = () => { 
        setbooks(books.filter((book) => book.key != primarykey));
        handleClose();
        setprimarykey('');
        
     }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className='border-0 d-flex justify-content-center pt-4' closeButton>
          <h2>{ (bookFlag != true) ? "Delete Student" : "Delete Book" }</h2>
        </div>
        <Modal.Body className='justify-centent-center ps-5 ms-5 grey'>Are you sure to mark this book as returned?</Modal.Body>
        <Modal.Footer className='border-0 justify-content-center gap-4 pb-5'>
          <Button variant="outline-secondary" className='px-5' onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" className='px-5' onClick={(bookFlag != true) ? handleStudentDelete : deletebook}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal