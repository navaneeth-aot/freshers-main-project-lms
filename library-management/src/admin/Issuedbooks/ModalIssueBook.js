import React, { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { BooksContext , StudentContext } from '../../App';

export default function ModalIssueBook({show,setShow}) {

  const Students = useContext(StudentContext);
  const books = useContext(BooksContext);

  const [BookName, setBookName] = useState('');
  const [IssuedStudent, setIssuedStudent] = useState('');
  const [IssueDate, setIssueDate] = useState('');
  const [DueDate, setDueDate] = useState('');

  const handleClose = () => setShow(false);

  const handleBook = (e)=> { setBookName(e.target.value) }
  const handleStudent = (e)=> { setIssuedStudent(e.target.value) }
  const handleIssueDate = (e)=> { setIssueDate(e.target.value) }
  const handleDueDate = (e)=> { setDueDate(e.target.value) }

  const IssueBook = () => {

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
                <option>Select Book</option>
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
              <option>Select Student</option>
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
                type="date"
                onChange={handleIssueDate}
                className = "grey"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentConfirmPassword">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="text"
                onChange={handleDueDate}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer  className='px-4 border-top-0'>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={IssueBook}>
            Add Student
          </Button>
        </Modal.Footer>
      </Modal>
  );
}