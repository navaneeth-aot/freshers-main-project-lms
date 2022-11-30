import React from 'react';
import { useContext , useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Moment from 'moment';
import DateDiff from 'date-diff';
import { MdEdit } from 'react-icons/md';
import { FiEye } from 'react-icons/fi';
import { BooksContext , IssuedBooksContext , StudentContext } from '../../App';

function MyBooksList({search,id}) {
    const books = useContext(BooksContext);
    const IssuedBook = useContext(IssuedBooksContext); 
    const Students = useContext(StudentContext);

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
                
            var date1 = new Date();
            var date2 = new Date(issued.DueDate);
            var diff = new DateDiff(date1, date2);
            obj.fine = Math.round(diff.days())*10

            return(obj)
        }
    })

    
    


    return (
        <>
            <Nav variant="tabs" defaultActiveKey="Issued">
                <Nav.Item>
                    <Nav.Link eventKey="Issued">Issued Books ({booksTakenByStudent.length})</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Pending">Pending to return ({pending})</Nav.Link>
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
                    <div className='col-2 ps-4'>Fine<br/>(Rs. 10 per day)</div>
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


