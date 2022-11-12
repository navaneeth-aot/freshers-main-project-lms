import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Example({show,setShow}) {
  

  const handleClose = () => setShow(false);

  return (
      
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton  className='px-4 border-bottom-0'>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='px-4'>
          <Form className='border-top border-bottom py-3'>
          <Form.Group className="mb-3" controlId="studentName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: John Doe"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="studentEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Eg: johndoe@gmail.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="studentPassword">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="studentConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="pasword"
                placeholder=""
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer  className='px-4 border-top-0'>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Student
          </Button>
        </Modal.Footer>
      </Modal>
  );
}