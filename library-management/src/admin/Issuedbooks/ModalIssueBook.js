import React, { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { BooksContext , StudentContext , IssuedBooksContext , IssuedBooksArrayContext } from '../../App';

export default function ModalIssueBook({show,setShow}) {

  const Students = useContext(StudentContext);
  const books = useContext(BooksContext);
  const IssuedBook = useContext(IssuedBooksContext);
  const setIssuedBook = useContext(IssuedBooksArrayContext);

  const [BookName, setBookName] = useState('');
  const [IssuedStudent, setIssuedStudent] = useState('');
  const [IssueDate, setIssueDate] = useState('');
  const [DueDate, setDueDate] = useState('');
  const [fine, setfine] = useState(0)
  const [Return, setReturn] = useState('')
  const [key, setkey] = useState(1);

  const handleClose = () => setShow(false);

  const handleBook = (e)=> { setBookName(e.target.value) }
  const handleStudent = (e)=> { setIssuedStudent(e.target.value) }
  const handleIssueDate = (e)=> { setIssueDate(e.target.value) }
  const handleDueDate = (e)=> { setDueDate(e.target.value) }

  const IssueBook = () => {
    setkey(key+1);
    setIssuedBook([...IssuedBook,{key:key,title:BookName,name:IssuedStudent,IssueDate:IssueDate,DueDate:DueDate,fine:fine,ReturnDate:Return}]);
    setBookName('')
    setIssuedStudent('')
    setIssueDate('')
    setDueDate('')
    handleClose();
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
                  return (
                    <>
                      <option value={book.title}>{book.title}</option>
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
                    <option value={student.name}>{student.name}</option>
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
      </Modal>
  );
}