import React, { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { StudentArrayContext , StudentContext } from './StudentPage';

export default function ModalAddStudent({show,setShow}) {

  const Students = useContext(StudentContext);
  const setstudents = useContext(StudentArrayContext);

  const [studentName, setstudentName] = useState('');
  const [studentEmail, setstudentEmail] = useState('');
  const [studentpassword, setstudentpassword] = useState('');
  const [studentPassConfirm, setstudentPassConfirm] = useState('');
  const [key, setkey] = useState(0)

  const handleClose = () => { setShow(false) };

  const handleStudentName = (e)=> { setstudentName(e.target.value) }
  const handleStudentEmail = (e)=> { setstudentEmail(e.target.value) }
  const handleStudentPassword = (e)=> { setstudentpassword(e.target.value) }
  const handleStudentPassConfirm = (e)=> { setstudentPassConfirm(e.target.value) }

  const addStudent = () => {
    if(((studentName && studentEmail) && studentpassword) == "") {
      alert("please fill all the fields");
    }
    else if(studentpassword != studentPassConfirm) {
      alert("password did not match");
    }
    else {
      setkey(key+1);
      setstudents([...Students,{key:key,name:studentName,Email:studentEmail,password:studentpassword}]);
      handleClose();
    } 
  }

  return (
      
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton  className='px-4 border-bottom-0'>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='px-4'>
          <Form className='border-top border-bottom py-3'>

          <Form.Group className="mb-3" controlId="studentName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: John Doe"
                autoFocus
                onChange={handleStudentName}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Eg: johndoe@gmail.com"
                onChange={handleStudentEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="studentPassword">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleStudentPassword}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
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