import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalIssueBook({show,setShow}) {
  const [studentName, setstudentName] = useState('');
  const [studentEmail, setstudentEmail] = useState('');
  const [studentpassword, setstudentpassword] = useState('');
  const [studentPassConfirm, setstudentPassConfirm] = useState('');

  const handleClose = () => setShow(false);

  const handleStudentName = (e)=> { setstudentName(e.target.value) }
  const handleStudentEmail = (e)=> { setstudentEmail(e.target.value) }
  const handleStudentPassword = (e)=> { setstudentpassword(e.target.value) }
  const handleStudentPassConfirm = (e)=> { setstudentPassConfirm(e.target.value) }

  const addStudent = () => {
    studentpassword != studentPassConfirm ? alert("password did not match") : alert("success")
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
              <Form.Select aria-label="Default select example">
                <option>Select Book</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentEmail">
              <Form.Label>Student</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Student</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="studentPassword">
              <Form.Label>Issue Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleStudentPassword}
                className = "grey"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentConfirmPassword">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="text"
                onChange={handleStudentPassConfirm}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer  className='px-4 border-top-0'>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addStudent}>
            Add Student
          </Button>
        </Modal.Footer>
      </Modal>
  );
}