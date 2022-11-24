import React, { useState , useContext } from 'react';
import { shortid } from 'shortid'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BooksArrayContext , BooksContext } from '../../App';

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
  const shortid = require('shortid');
  const books = useContext(BooksContext);
  const setbooks = useContext(BooksArrayContext);

  const [bookTitle, setbookTitle] = useState("");
  const [bookAuthor, setbookAuthor] = useState("");
  const [bookLanguage, setbookLanguage] = useState("");
  const [totalCopies, settotalCopies] = useState(0);
  const [remainingCopies, setremainingCopies] = useState(0);

  const [key, setkey] = useState(shortid.generate())

  const handleClose = () => {setShow(false);setBookEditFlag(false)}


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
      if(( bookTitle && totalCopies ) == "") {
        toast.error('please fill Book Name and totalCopies!', {
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
        setkey(shortid.generate());
        setbooks([...books,{key:key,title:bookTitle,author:bookAuthor,language:bookLanguage,total:totalCopies,remaining:remainingCopies}]);
        setbookTitle('')
        setbookAuthor('')
        setbookLanguage('N/A')
        settotalCopies('0')
        setremainingCopies('0')
        handleClose();
      }
    }
    else {
      if(( editTitle && editTotal ) == "") {
        toast.error('please fill Book Name and totalCopies atleast  !', {
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
        const updatedAllbooks = books.map((item) => {
          if(item.key == primarykey) {
          item.title = editTitle;
          item.author = editAuthor;
          item.language = editLanguage;
          item.total = editTotal;
          item.remaining = editRemaining;
          }
          return(item)
        })
        setbooks(updatedAllbooks)
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
              <Form.Label className='blue fw-semibold'>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Pride and Prejudice"
                autoFocus
                value={(BookEditFlag != true) ? bookTitle : editTitle}
                onChange={(BookEditFlag != true) ? handlebookTitle : handleEditTitle }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bookAuthor">
              <Form.Label className='blue fw-semibold'>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Jane Austen"
                value={(BookEditFlag != true) ? bookAuthor : editAuthor}
                onChange={(BookEditFlag != true) ? handlebookAuthor : handleEditAuthor }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookLanguage">
              <Form.Label className='blue fw-semibold'>Language</Form.Label>
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
                <Form.Label className='blue fw-semibold'>Total Copies</Form.Label>
                <Form.Control
                  type="number"
                  value={(BookEditFlag != true) ? totalCopies : editTotal}
                  onChange={(BookEditFlag != true) ? handletotalCopies : handleEdittotalCopies }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="studentConfirmPasword">
                <Form.Label className='blue fw-semibold'>Remaining</Form.Label>
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