import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalAllbooks({show,setShow}) {
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
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='px-4'>
          <Form className='border-top border-bottom py-3'>

          <Form.Group className="mb-3" controlId="studentName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Pride and Prejudice"
                autoFocus
                onChange={handleStudentName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentEmail">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Jane Austen"
                onChange={handleStudentEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="studentPassword">
              <Form.Label>Language</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Language</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentConfirmPassword">
              <Form.Label>Total Copies</Form.Label>
              <Form.Control
                type="number"
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