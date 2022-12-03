import React from 'react';
import { useContext , useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Moment from 'moment';
import DateDiff from 'date-diff';
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
>>>>>>> Stashed changes
import { BooksContext , IssuedBooksContext } from '../../App';
import MyBooksData from './MyBooksData';
=======
import { MdEdit } from 'react-icons/md';
import { FiEye } from 'react-icons/fi';
import { BooksContext , IssuedBooksContext , StudentContext } from '../../App';
>>>>>>> parent of 0fa2ec6 (student completed (without sorting))

function MyBooksList({search,id,sortValue}) {
    const books = useContext(BooksContext);
    const IssuedBook = useContext(IssuedBooksContext);

    let pending = 0;
    const booksTakenByStudent = IssuedBook.filter((bookList) => {
        if(bookList.name == id){
            if(bookList.return != true) {
                pending ++;
            }
            return(bookList);
        }
            
    })

    const tempArray = booksTakenByStudent.map((issued) => {
        if(issued.name == id) {
            let obj ={ key: issued.key,
                       IssueDate: issued.IssueDate,
                       DueDate: issued.DueDate,
                       return: issued.return,
                       ReturnDate: issued.ReturnDate,
                    }

            books.map((book) => {
                if(book.key == issued.title) {
                    obj.title = book.title;
                    obj.author = book.author;
                    }
                })
             
            var date1 = issued.ReturnDate == "" ? new Date() : new Date(issued.ReturnDate);
            var date2 = new Date(issued.DueDate);
            var diff = new DateDiff(date1, date2);
            obj.fine = Math.floor(diff.days())*10

            return(obj)
        }
    })

    
<<<<<<< HEAD
    const handleIssued = () => { seteventKey("Issued") }
    const handlePending = () => { seteventKey("Pending") }
    const handleReturned = () => { seteventKey("Returned") }

    if(sortValue == 2) {
        tempArray.sort((a, b) => {
            let date_a = new Date(a.IssueDate);
            let date_b = new Date(b.IssueDate);
            if (date_a < date_b) return -1;
            if (date_a > date_b) return 1;
            return 0;
        })
    }
=======
    
>>>>>>> parent of 0fa2ec6 (student completed (without sorting))

    if(sortValue == 1) {
        tempArray.sort((a, b) => {
            let date_a = new Date(a.IssueDate);
            let date_b = new Date(b.IssueDate);
            if (date_a > date_b) return -1;
            if (date_a < date_b) return 1;
            return 0;
        })
    }

    return (
        <>
            <Nav variant="tabs" defaultActiveKey="Issued">
                <Nav.Item>
                    <Nav.Link eventKey="Issued">Issued Books ({booksTakenByStudent.length})</Nav.Link>
                </Nav.Item>
<<<<<<< HEAD
                <Nav.Item className='px-5'>
                    <Nav.Link eventKey="Pending" onClick={handlePending}>Pending to return ({pending})</Nav.Link>
=======
                <Nav.Item>
                    <Nav.Link eventKey="Pending">Pending to return ({pending})</Nav.Link>
>>>>>>> parent of 0fa2ec6 (student completed (without sorting))
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Returned">Returned Books ({booksTakenByStudent.length - pending})</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className='px-4 bg-white'>
                <div className="d-flex justify-content-between px-2 py-3 mt-5 border-bottom grey bg-white">
                    <div className='col-2'>Book Title</div>
                    <div className='col-2'>Author</div>
                    <div className='col-2'>Issue Date</div>
                    <div className='col-2'>Due Date</div>
                    <div className='col-2'>Return Date</div>
                    <div className='col-2 ps-3'>Fine<br/>(Rs. 10 per day)</div>
                </div>
                
                
                {tempArray.filter((tempValue) => {
                        if(search == "") { return tempValue }
                        else if(tempValue.title.toLowerCase().includes(search.toLowerCase())) { return tempValue }
                        else if(tempValue.author.toLowerCase().includes(search.toLowerCase())) { return tempValue }
                        }).map((item) => {
                            if(item.return != false)
                            return (
                                <div key={item.key} className="d-flex justify-content-between px-2 py-3 border-bottom blue">
                                    <div className='col-2'> {item.title} </div>
                                    <div className='col-2'> {item.author} </div>
                                    <div className='col-2'>{Moment(new Date(item.IssueDate)).format("DD-MM-YYYY")}</div>
                                    <div className='col-2'>{Moment(new Date(item.DueDate)).format("DD-MM-YYYY")}</div>
                                    <div className='col-2'>{ item.ReturnDate == "" ? "-" : Moment(new Date(item.ReturnDate)).format("DD-MM-YYYY") }</div>
                                    <div className='col-2 ps-5'> { item.fine < 0 ? 0 : item.fine } </div>
                                </div>
                                )
                            })
                        }
        </div>
    </>
  )
}

export default MyBooksList


