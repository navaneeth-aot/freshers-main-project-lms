import React, { useState , useContext } from 'react';
import { shortid } from 'shortid'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BooksArrayContext , BooksContext } from '../../App';
import { useMutation } from '@apollo/client';
import { ADD_BOOK, UPDATE_BOOK } from '../../graphQl/graphql';

export default function ModalAllbooks({show,
                                      setShow,
                                      BookEditFlag,
                                      setBookEditFlag, 
                                      primarykey,
                                      editTitle,
                                      editAuthor,
                                      editLanguage,
                                      editTotal,
                                      editRemaining,
                                      seteditTitle,
                                      seteditAuthor,
                                      seteditLanguage,
                                      seteditTotal,
                                      seteditRemaining
}) 
{

  const [bookTitle, setbookTitle] = useState("");
  const [bookAuthor, setbookAuthor] = useState("");
  const [bookLanguage, setbookLanguage] = useState("");
  const [totalCopies, settotalCopies] = useState(0);
  const [remainingCopies, setremainingCopies] = useState(0);

  const [updateBook,{data:updateBookData}] = useMutation(UPDATE_BOOK);
  const [addBook,{data:addBookData}] = useMutation(ADD_BOOK);

  const handleClose = () => {
    setShow(false);
    setBookEditFlag(false);
    setbookTitle('');
    setbookAuthor('');
    setbookLanguage('N/A');
    settotalCopies(0);
    setremainingCopies(0);
  }


  const handlebookTitle = (e)=> { setbookTitle(e.target.value) }
  const handlebookAuthor = (e)=> { setbookAuthor(e.target.value) }
  const handlebookLanguage = (e)=> { setbookLanguage(e.target.value) }
  const handletotalCopies = (e)=> { settotalCopies(e.target.value); setremainingCopies(e.target.value) }
  const handleremainingCopies = (e)=> { setremainingCopies(e.target.value) }

  const handleEditTitle = (e)=> { seteditTitle(e.target.value) }
  const handleEditAuthor = (e)=> { seteditAuthor(e.target.value) }
  const handleEditLanguage = (e)=> { seteditLanguage(e.target.value) }
  const handleEdittotalCopies = (e)=> { seteditTotal(e.target.value) }
  const handleEditremainingCopies = (e)=> { seteditRemaining(e.target.value) }

  const addBooks = () => {
    if(BookEditFlag == false) {
      if((( bookTitle && totalCopies ) == "") || (( bookLanguage && bookAuthor ) == "")) {
        toast.error('please fill all the fields !', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else {
        addBook({
          variables: {
            TITLE: bookTitle,
            AUTHOR: bookAuthor,
            LANGUAGE: bookLanguage,
            TOTAL: Number(totalCopies),
            REMAINING: Number(remainingCopies),
          },
        })
        handleClose();
      }
    }
    else {
      if((( editTitle && editTotal ) == "") || (( editAuthor && editLanguage ) == "")) {
        toast.error('please fill Book Name and totalCopies atleast !', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else {
        updateBook({
          variables: {
            ID: primarykey,
            TITLE: editTitle,
            AUTHOR: editAuthor,
            LANGUAGE: editLanguage,
            TOTAL: Number(editTotal),
            REMAINING: Number(editRemaining),
          },
        });
        handleClose()
      }
    }
  }

  return (
      
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton  className='px-4 border-bottom-0'>
          <Modal.Title className='blue fw-bold'>{(BookEditFlag != true) ? "Add Book" : "Update Book" }</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='px-4'>
          <Form className='border-top border-bottom py-3'>

          <Form.Group className="mb-3" controlId="bookTitle">
              <Form.Label className='blue'>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Pride and Prejudice"
                autoFocus
                value={(BookEditFlag != true) ? bookTitle : editTitle}
                onChange={(BookEditFlag != true) ? handlebookTitle : handleEditTitle }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bookAuthor">
              <Form.Label className='blue'>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Jane Austen"
                value={(BookEditFlag != true) ? bookAuthor : editAuthor}
                onChange={(BookEditFlag != true) ? handlebookAuthor : handleEditAuthor }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookLanguage">
              <Form.Label className='blue'>Language</Form.Label>
              <Form.Select aria-label="Default select example" 
              value={(BookEditFlag != true) ? bookLanguage : editLanguage}
              onChange={(BookEditFlag != true) ? handlebookLanguage : handleEditLanguage }>
                <option value="N/A">Select Language</option>
                <option value="English">English</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Hindi">Hindi</option>Mandarin
                <option value="Spanish">Spanish</option>
                <option value="Mandarin">Mandarin</option>
                <option value="French">French</option>
                <option value="Arabic">Arabic</option>
                <option value="Russian">Russian</option>
                <option value="Bengali">Bengali</option>
                <option value="Portuguese">Portuguese</option>
              </Form.Select>
            </Form.Group>

            <div className='d-flex gap-5'>
              <Form.Group className="mb-3" controlId="studentConfirmPassword">
                <Form.Label className='blue'>Total Copies</Form.Label>
                <Form.Control
                  type="number"
                  value={(BookEditFlag != true) ? totalCopies : editTotal}
                  onChange={(BookEditFlag != true) ? handletotalCopies : handleEdittotalCopies }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="studentConfirmPasword">
                <Form.Label className='blue'>Remaining</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(BookEditFlag != true) ? handleremainingCopies : handleEditremainingCopies }
                  value={(BookEditFlag != true) ? remainingCopies : editRemaining}
                />
              </Form.Group>
            </div>
            
          </Form>
        </Modal.Body>
        <Modal.Footer  className='px-4 border-top-0'>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addBooks}>
            {(BookEditFlag != true) ? "Add Book" : "Update" }
          </Button>
        </Modal.Footer>
        <ToastContainer />
      </Modal>
  );
}