import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Moment from 'moment';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_BOOK, DELETE_STUDENT, FETCH_BOOK_BY_ID, MARK_AS_READ, RETURN_BOOK } from '../graphQl/graphql';

function DeleteModal({show,setShow,setprimarykey,primarykey,bookFlag,setbookFlag,Title,setTitle,markFlag,setmarkFlag}) {
  
  const [deleteBook,{data:deleteBookData}] = useMutation(DELETE_BOOK);
  const [deleteStudent,{data:deleteStudentData}] = useMutation(DELETE_STUDENT);
  const [markAsRead,{data:markAsReadData}] = useMutation(MARK_AS_READ);
  const [ReturnBook,{data:returnBookData}] = useMutation(RETURN_BOOK);
  const {data:BookData} = useQuery(FETCH_BOOK_BY_ID,{variables : {ID:primarykey}});
  const {data:ReturnBookData} = useQuery(FETCH_BOOK_BY_ID,{variables : {ID:Title}});

  const handleClose = () => {
    setShow(false);
    (bookFlag != false) && setbookFlag(false);
    (markFlag != false) && setmarkFlag(false)
  }

  const handleStudentDelete = () => { 
        deleteStudent({variables : {ID:primarykey}})
        handleClose()
        setprimarykey('')
  }

  const deletebook = () => { 
        let flag = false;
        if(BookData?.booksById.remaining == BookData?.booksById.total) {
          console.log(BookData?.booksById.remaining)
          flag = true;
        }

        if(flag == true) {
          deleteBook({variables:{ID:primarykey}});
          handleClose();
          setprimarykey('');
        }
        else {
          toast.info('You cannot delete this book !. This book is not fully returned', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          handleClose();
        }
  }

  const handleReturn = () => { 
      markAsRead({variables : {ID:primarykey,RETURNDATE:Moment().format("YYYY-MM-DD"),ISRETURN:true}})
      ReturnBook({variables : {ID:Title,REMAINING:ReturnBookData?.booksById.remaining + 1}});
      handleClose();
      setprimarykey('');
      setTitle('')
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className='border-0 d-flex justify-content-center pt-4' >
          <h2>{ (markFlag != true) ? ((bookFlag != true) ? "Delete Student" : "Delete Book") : "Mark as returned?" }</h2>
        </div>
        <Modal.Body className='justify-content-center grey text-center'>{(markFlag != true) ? ((bookFlag != true) ? "Are you want to Delete this Student" : "Are you want to Delete this Book") : "Are you sure to mark this book as returned?"}</Modal.Body>
        <Modal.Footer className='border-0 justify-content-center gap-4 pb-5'>
          <Button variant="outline-secondary" className='px-5' onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" className='px-5' onClick={ (markFlag != true) ? ((bookFlag != true) ? handleStudentDelete : deletebook) : handleReturn }>
            Yes
          </Button>
          
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default DeleteModal