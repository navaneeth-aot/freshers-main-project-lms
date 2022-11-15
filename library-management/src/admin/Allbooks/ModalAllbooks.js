import React, { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { BooksArrayContext , BooksContext } from '../../App';

export default function ModalAllbooks({show,setShow}) {

  const books = useContext(BooksContext);
  const setbooks = useContext(BooksArrayContext);

  const [bookTitle, setbookTitle] = useState("");
  const [bookAuthor, setbookAuthor] = useState("");
  const [bookLanguage, setbookLanguage] = useState("");
  const [totalCopies, settotalCopies] = useState(0);
  const [remainingCopies, setremainingCopies] = useState(0);
  const [key, setkey] = useState(1)

  const handleClose = () => setShow(false);

  const handlebookTitle = (e)=> { setbookTitle(e.target.value) }
  const handlebookAuthor = (e)=> { setbookAuthor(e.target.value) }
  const handlebookLanguage = (e)=> { setbookLanguage(e.target.value) }
  const handletotalCopies = (e)=> { settotalCopies(e.target.value) }
  const handleremainingCopies = (e)=> { setremainingCopies(e.target.value) }

  const addStudent = () => {
    if(( bookTitle && totalCopies ) == "") {
      alert("please fill Book Name and totalCopies");
    }
    else {
      setkey(key+1);
      setbooks([...books,{key:key,title:bookTitle,author:bookAuthor,language:bookLanguage,total:totalCopies,remaining:remainingCopies}]);
      handleClose();
      console.log(key)
    }
  }

  return (
      
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton  className='px-4 border-bottom-0'>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='px-4'>
          <Form className='border-top border-bottom py-3'>

          <Form.Group className="mb-3" controlId="bookTitle">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Pride and Prejudice"
                autoFocus
                onChange={handlebookTitle}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bookAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Jane Austen"
                onChange={handlebookAuthor}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookLanguage">
              <Form.Label>Language</Form.Label>
              <Form.Select aria-label="Default select example" onClick={handlebookLanguage}>
                <option value="N/A">Select Language</option>
                <option value="English">English</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Hindi">Hindi</option>
              </Form.Select>
            </Form.Group>

            <div className='d-flex gap-5'>
              <Form.Group className="mb-3" controlId="studentConfirmPassword">
                <Form.Label>Total Copies</Form.Label>
                <Form.Control
                  type="number"
                  onChange={handletotalCopies}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="studentConfirmPasword">
                <Form.Label>Remaining</Form.Label>
                <Form.Control
                  type="number"
                  onChange={handleremainingCopies}
                />
              </Form.Group>
            </div>
            
          </Form>
        </Modal.Body>
        <Modal.Footer  className='px-4 border-top-0'>
          <Button variant="outline-secondary" onSelect={handleClose}>
            Close
          </Button>
          <Button onClick={addStudent}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
  );
}