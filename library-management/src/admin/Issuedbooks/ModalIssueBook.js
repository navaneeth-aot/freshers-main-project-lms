import React, { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BooksContext , StudentContext , IssuedBooksContext , IssuedBooksArrayContext ,BooksArrayContext } from '../../App';

export default function ModalIssueBook({show,setShow}) {

  const shortid = require('shortid');
  const Students = useContext(StudentContext);
  const books = useContext(BooksContext);
  const setbooks = useContext(BooksArrayContext);
  const IssuedBook = useContext(IssuedBooksContext);
  const setIssuedBook = useContext(IssuedBooksArrayContext);

  const [BookName, setBookName] = useState('');
  const [IssuedStudent, setIssuedStudent] = useState('');
  const [IssueDate, setIssueDate] = useState('');
  const [DueDate, setDueDate] = useState('');
  const [fine, setfine] = useState(0)
  

  const [key, setkey] = useState(shortid.generate());

  const handleClose = () => setShow(false);

  const handleBook = (e)=> { setBookName(e.target.value) }
  const handleStudent = (e)=> { setIssuedStudent(e.target.value) }
  const handleIssueDate = (e)=> { setIssueDate(e.target.value) }
  const handleDueDate = (e)=> { setDueDate(e.target.value) }

  const IssueBook = () => {
    if(((BookName && IssuedStudent) && IssueDate) != "") {
    const newBook = books.map((obj) => {
      if(obj.key == BookName){
        obj.remaining = obj.remaining - 1;
      }
      return(obj)
    })
    setbooks(newBook)
    setkey(key);
    setIssuedBook([...IssuedBook,{key:key,title:BookName,name:IssuedStudent,IssueDate:IssueDate,DueDate:DueDate,fine:fine,ReturnDate:"",return:false}]);
    setBookName('')
    setIssuedStudent('')
    setIssueDate('')
    setDueDate('')
    handleClose();
    }
    else 
    toast.error('Book , Student , Issue Date are mandatory!', {
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

  return (
      
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton  className='px-4 border-bottom-0'>
          <Modal.Title>Issue Book</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='px-4'>
          <Form className='border-top border-bottom py-3'>
          
          <Form.Group className="mb-3" controlId="studentName">
              <Form.Label>Book</Form.Label>
              <Form.Select aria-label="Default select example"
                onChange={handleBook}>
                <option value="N/A">Select Book</option>
                {books.map((book) => {
                  if(book.remaining != 0)
                  return (
                    <>
                      <option value={book.key}>{book.title}</option>
                    </>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentEmail">
              <Form.Label>Student</Form.Label>
              <Form.Select aria-label="Default select example"
              onChange={handleStudent}>
              <option value="N/A">Select Student</option>
              {Students.map((student) => {
                return (
                  <>
                    <option value={student.key}>{student.name}</option>
                  </>
                );
              })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="studentPassword">
              <Form.Label>Issue Date</Form.Label>
              <Form.Control
                type="Date"
                onChange={handleIssueDate}
                className = "grey"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentConfirmPassword">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="Date"
                onChange={handleDueDate}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer  className='px-4 border-top-0'>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={IssueBook}>
            Issue Book
          </Button>
        </Modal.Footer>
        <ToastContainer />
      </Modal>
  );
}