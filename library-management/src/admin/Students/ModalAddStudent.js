import React, { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StudentArrayContext , StudentContext } from '../../App';

export default function ModalAddStudent({show,setShow,editFlag,seteditFlag,primarykey,editEmail,seteditEmail,editname,seteditname,editpassword,seteditpassword,editpasswordConfirm, seteditpasswordConfirm}) {

  const Students = useContext(StudentContext);
  const setstudents = useContext(StudentArrayContext);

  const shortid = require('shortid');
  const [studentName, setstudentName] = useState('');
  const [studentEmail, setstudentEmail] = useState('');
  const [studentpassword, setstudentpassword] = useState('');
  const [studentPassConfirm, setstudentPassConfirm] = useState('');


  const [key, setkey] = useState(shortid.generate())

  const handleClose = () => { setShow(false);seteditFlag(false); } 

  const handleStudentName = (e)=> { setstudentName(e.target.value) }
  const handleStudentEmail = (e)=> { setstudentEmail(e.target.value) }
  const handleStudentPassword = (e)=> { setstudentpassword(e.target.value) }
  const handleStudentPassConfirm = (e)=> { setstudentPassConfirm(e.target.value) }

  const handleEditName = (e)=> { seteditname(e.target.value);console.log(e.target.value) }
  const handleEditEmail = (e)=> { seteditEmail(e.target.value);console.log(e.target.value) }
  const handleEditPassword = (e)=> { seteditpassword(e.target.value);console.log(e.target.value) }
  const handleEditPasswordConfirm = (e)=> { seteditpasswordConfirm(e.target.value);console.log(e.target.value) }

  const addStudent = () => {
    if(editFlag != false) {
      if(((editname && editEmail) && editpassword) == "") {
        toast.error('please fill all  fields!', {
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
      else if(editpassword != editpasswordConfirm) {
        toast.info('please fill all  fields!', {
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
        const updatedStudents = Students.map((item) => {
          if(item.key == primarykey) {
          item.name = editname;
          item.Email = editEmail;
          item.password = editpassword;
          }
          return(item)
        })
        setstudents(updatedStudents)
        handleClose()
      }
    }

    else {
      if(((studentName && studentEmail) && studentpassword) == "") {
        toast.error('please fill all  fields!', {
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
      else if(studentpassword != studentPassConfirm) {
        toast.info('please fill all  fields!', {
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
        setstudents([...Students,{key:key,name:studentName,Email:studentEmail,password:studentpassword}]);
        setstudentName('')
        setstudentEmail('')
        setstudentpassword('')
        setstudentPassConfirm('')
        handleClose();
      }
    }
  }
  
    
  return (
      
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton  className='px-4 border-bottom-0'>
          <Modal.Title>{(editFlag != true) ? "Add Student" : "Update Student" }</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='px-4'>
          <Form className='border-top border-bottom py-3'>
          <Form.Group className="mb-3" controlId="studentName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: John Doe"
                autoFocus
                value={(editFlag != true) ? studentName : editname}
                onChange={(editFlag != true) ? handleStudentName : handleEditName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Eg: johndoe@gmail.com"
                value={(editFlag != true) ? studentEmail : editEmail}
                onChange={(editFlag != true) ? handleStudentEmail : handleEditEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="studentPassword">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                value={editFlag != true ? studentpassword : editpassword}
                onChange={(editFlag != true) ? handleStudentPassword : handleEditPassword}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
                type="password"
                value={editFlag != true ? studentPassConfirm : editpasswordConfirm}
                onChange={(editFlag != true) ? handleStudentPassConfirm : handleEditPasswordConfirm}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer  className='px-4 border-top-0'>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addStudent}>
            {(editFlag != true) ? "Add Student" : "Update" }
          </Button>
        </Modal.Footer>
        <ToastContainer />
      </Modal>
  );
}