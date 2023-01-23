import React, { useState , useContext , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_ISSUEDBOOK, FETCH_BOOKS, FETCH_BOOK_BY_ID, FETCH_STUDENTS, RETURN_BOOK } from '../../graphQl/graphql';

export default function ModalIssueBook({show,setShow}) {

  const [BookName, setBookName] = useState('');
  const [IssuedStudent, setIssuedStudent] = useState('');
  const [Issue, setIssue] = useState(Moment().format("YYYY-MM-DD"));
  const [Due, setDue] = useState(moment().add(7, 'days').format("YYYY-MM-DD"));

  const [BookIssue,{data:IssueBookData}] = useMutation(ADD_ISSUEDBOOK);
  const {data:BookData} = useQuery(FETCH_BOOK_BY_ID,{variables : {ID:BookName}});
  const {data:StudentData} = useQuery(FETCH_STUDENTS);
  const {data:AllBooks} = useQuery(FETCH_BOOKS);
  const [ReturnBook,{data:returnBookData}] = useMutation(RETURN_BOOK);
  
  useEffect(() => {
    setDue(moment(Issue, "YYYY-MM-DD").add(7, 'days').format("YYYY-MM-DD"))
  }, [Issue]);  

  const handleClose = () => {
    setShow(false);
    setBookName('')
    setIssuedStudent('')
    setIssue(Moment().format("YYYY-MM-DD"))
  }

  const handleBook = (e)=> { setBookName(e.target.value) }
  const handleStudent = (e)=> { setIssuedStudent(e.target.value) }
  const handleIssueDate = (e)=> { 
    const newDate = Moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setIssue(newDate);
    }
  const handleDueDate = (e)=> { 
    const newDate = Moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setDue(newDate);
    }

  const IssueBook = () => {
    if(((BookName && IssuedStudent) && Issue) != "") {
      ReturnBook({variables : {ID:BookName,REMAINING:BookData?.booksById.remaining - 1}});
      BookIssue({
        variables: {
          TITLE: BookName,
          NAME: IssuedStudent,
          ISSUEDDATE: Issue,
          DUEDATE: Due,
          RETURNDATE: "",
          ISRETURN: false,
        },
    });
    handleClose();
    }
    else 
    toast.error('Fill all the fields !', {
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
          <Modal.Title className='blue fw-bold'>Issue Book</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='px-4'>
          <Form className='border-top border-bottom py-3'>
          
          <Form.Group className="mb-3" controlId="studentName">
              <Form.Label className='blue'>Book</Form.Label>
              <Form.Select aria-label="Default select example"
                onChange={handleBook}>
                <option value="N/A">Select Book</option>
                {AllBooks?.books.map((book) => {
                  if(book.remaining != 0)
                  return (
                    <>
                      <option value={book.id}>{book.title}</option>
                    </>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentEmail">
              <Form.Label className='blue'>Student</Form.Label>
              <Form.Select aria-label="Default select example"
              onChange={handleStudent}>
              <option value="N/A">Select Student</option>
              {StudentData?.students.map((student) => {
                return (
                  <>
                    <option value={student.id}>{student.name}</option>
                  </>
                );
              })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="studentPassword">
              <Form.Label className='blue'>Issue Date</Form.Label>
              <Form.Control
                type="Date"
                className = "grey"
                value={Issue}
                onInput ={handleIssueDate}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="studentConfirmPassword">
              <Form.Label className='blue'>Due Date</Form.Label>
              <Form.Control
                type="Date"
                className = 'grey'
                value={Due}
                onChange={handleDueDate}
                disabled
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