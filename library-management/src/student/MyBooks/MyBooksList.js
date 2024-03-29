import React from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import DateDiff from 'date-diff';
import MyBooksData from './MyBooksData';
import { useQuery } from '@apollo/client';
import { FETCH_BOOKS, FETCH_ISSUEDBOOK } from '../../graphQl/graphql';

function MyBooksList({search,id,sortValue}) {
    const [eventKey, seteventKey] = useState("Issued");
    const {data,loading,error} = useQuery(FETCH_ISSUEDBOOK);
    const {data:BookData} = useQuery(FETCH_BOOKS);

    if(loading) return <p className='pt-3'>loading data...</p>;
    if(error) return <p className='fs-1'>ERROR 404 </p>;

    let pending = 0;
    const booksTakenByStudent = data.IssuedBooks.filter((bookList) => {
        if(bookList.name == id){
            if(bookList.isreturn !== true) {
                pending ++;
            }
            return(bookList);
        }
            
    })

    const tempArray = booksTakenByStudent.map((issued) => {
        if(issued.name == id) {
            let obj ={ key: issued.id,
                       IssueDate: issued.IssuedDate,
                       DueDate: issued.DueDate,
                       return: issued.return,
                       ReturnDate: issued.ReturnDate,
                    }

                    BookData.books.map((book) => {
                if(book.id == issued.title) {
                    obj.title = book.title;
                    obj.author = book.author;
                    }
                })
             
            var date1 = issued.ReturnDate == "" ? new Date() : new Date(issued.ReturnDate);
            var date2 = new Date(issued.DueDate);
            var diff = new DateDiff(date1, date2);
            obj.fine = Math.round(diff.days())*10

            return(obj)
        }
    })

    const handleIssued = () => { seteventKey("Issued") }
    const handlePending = () => { seteventKey("Pending") }
    const handleReturned = () => { seteventKey("Returned") }

    if(sortValue == 1) {
        tempArray.sort((a, b) => {
            let date_a = new Date(a.IssueDate);
            let date_b = new Date(b.IssueDate);
            if (date_a < date_b) return -1;
            if (date_a > date_b) return 1;
            return 0;
        })
    }

    if(sortValue == 2) {
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
                    <Nav.Link eventKey="Issued" onClick={handleIssued}>Issued Books ({booksTakenByStudent.length})</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Pending" onClick={handlePending}>Pending to return ({pending})</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Returned" onClick={handleReturned}>Returned Books ({booksTakenByStudent.length - pending})</Nav.Link>
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
                            if(eventKey == "Pending" && item.return == false)
                                return <MyBooksData item={item}/>
                            if(eventKey == "Returned" && item.return != false)
                                return <MyBooksData item={item}/>
                            if(eventKey == "Issued")
                                return <MyBooksData item={item}/>
                            })
                        }
        </div>
    </>
  )
}

export default MyBooksList


