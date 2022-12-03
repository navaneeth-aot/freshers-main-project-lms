import React , {useContext , useEffect, useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { StudentContext,BooksContext,IssuedBooksContext } from '../App';
import Form from 'react-bootstrap/Form';
import DateDiff from 'date-diff';
import { GoSearch } from 'react-icons/go';
import { Link , useParams } from 'react-router-dom';
import Moment from 'moment';

function ViewDetails() {
    const Student = useContext(StudentContext);
    const books = useContext(BooksContext);
    const IssuedBook = useContext(IssuedBooksContext);
    let {id} = useParams();
    const [search, setsearch] = useState('')
    
    const booksTakenByStudent = IssuedBook.filter((bookList) => {
        if(bookList.name == id)
            return(bookList)
    })

    const studentDetails = Student.find((object) => {
        if(object.key == id) {
            return object;
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
            obj.fine = Math.round(diff.days())*10

            return(obj)
        }
    })
    
    let returnedBooks = 0;
    let totalFine = 0;

    tempArray.map((item) => {
        if(item.return != false) {
            returnedBooks = returnedBooks + 1;
        }
        if(item.fine > 0) {
            totalFine = totalFine + item.fine
        }
    })

    return (
    
            <>
            <div className='col-md-10 p-5 backcolor montserrat'>

                <p className='d-flex align-items-center'>
                <Link to="/studentspage" className='text-decoration-none blue fw-semibold '><MdOutlineArrowBackIos size={20}/><span className='grey'>Students</span> /{studentDetails.name} </Link>
                </p>
                <hr></hr>
                <div className='d-flex mt-5 px-5 bg-white py-3'>
                    <div className='col-8 border-end pt-2'>
                        <h4 className='dark'>{studentDetails.name}</h4>
                        <h6 className='dark-light'>{studentDetails.Email}</h6>
                    </div>
                    <div className='col-2 pt-2 ps-4 grey'>
                        <h6>Total Books issued</h6>
                        <h6>Returned Books</h6>
                        <h6>Total Fine</h6>
                    </div>
                    <div className='col-2 pt-2 ps-5 fw-semibold'>
                        <h6>{tempArray.length}</h6>
                        <h6>{returnedBooks}</h6>
                        <h6>Rs. {totalFine}</h6>
                    </div>
                </div>

                <div className='box mt-4 bg-white px-5 border-box rounded'>
                    <div>
                        <div className='pt-3'>
                            <h6 className='py-2 fw-semibold'>Issued Books ({tempArray.length})</h6>
                            <form className='col-md-6 py-2'>
                                <div className='d-flex align-items-center border rounded bg-white pe-3'>
                                    <Form.Control type="text" placeholder="Search by book title or author " className='border-0' onChange={ (e) => {setsearch(e.target.value)} }/>
                                    <GoSearch className='grey'/> 
                                </div> 
                            </form>
                        </div>
                        <div className="d-flex justify-content-between px-2 py-3 border-bottom grey">
                            <div className='col-2'>Book Title</div>
                            <div className='col-2'>Author</div>
                            <div className='col-2'>Issue Date</div>
                            <div className='col-2'>Due Date</div>
                            <div className='col-2'>Return Date</div>
                            <div className='col-2 ps-4'>Fine<br/>(Rs. 10 per day)</div>
                        </div>
                            
                    </div>
                    {tempArray.filter((tempValue) => {
                        if(search == "") { return tempValue }
                        else if(tempValue.title.toLowerCase().includes(search.toLowerCase())) { return tempValue }
                        else if(tempValue.author.toLowerCase().includes(search.toLowerCase())) { return tempValue }
                        }).map((item) => {
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
            </div>
            </>
    
        )
    }

export default ViewDetails