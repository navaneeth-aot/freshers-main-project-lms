import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({show,setShow,setprimarykey,primarykey,Student,setStudents,bookFlag,setbookFlag,setbooks,books,setIssuedBook,IssuedBook,Title,setTitle,markFlag,setmarkFlag}) {
  

  const handleClose = () => {
    setShow(false);
    (bookFlag != false) && setbookFlag(false);
    (markFlag != false) && setmarkFlag(false)
  }

  const handleStudentDelete = () => { 
        setStudents(Student.filter((students) => students.key != primarykey));
        handleClose()
        setprimarykey('')
     }

  const deletebook = () => { 
        setbooks(books.filter((book) => book.key != primarykey));
        handleClose();
        setprimarykey('');
        setTitle('')
     }

  const handleReturn = () => { 
      const marked = IssuedBook.map((object) => {
          if(object.key == primarykey) { 
              object.return = true
              object.ReturnDate = new Date()
          }
          return(object)
      })
      const newBook = books.map((object) => {
          if(object.key == Title) {
              object.remaining = object.remaining + 1
          }
           return(object)
       })
      setIssuedBook(marked)
      setbooks(newBook)
      handleClose();
      setprimarykey('');
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className='border-0 d-flex justify-content-center pt-4' >
          <h2>{ (markFlag != true) ? ((bookFlag != true) ? "Delete Student" : "Delete Book") : "Mark as returned?" }</h2>
        </div>
        <Modal.Body className='justify-centent-center ps-5 ms-5 grey'>{(markFlag != true) ? ((bookFlag != true) ? "Are you want to Delete this Student" : "Are you want to Delete this Book") : "Are you sure to mark this book as returned?"}</Modal.Body>
        <Modal.Footer className='border-0 justify-content-center gap-4 pb-5'>
          <Button variant="outline-secondary" className='px-5' onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" className='px-5' onClick={ (markFlag != true) ? ((bookFlag != true) ? handleStudentDelete : deletebook) : handleReturn }>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal