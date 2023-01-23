import React, { useState } from 'react';
import { useContext } from 'react';
import { MdOutlineAssignmentReturn } from 'react-icons/md';
import { BooksContext , BooksArrayContext } from '../../App';
import DeleteModal from '../DeleteModal';
import DateDiff from 'date-diff';
import ReactTooltip from 'react-tooltip';
import Moment from 'moment';
import { useQuery } from '@apollo/client';
import { FETCH_BOOKS, FETCH_BOOK_BY_ID, FETCH_ISSUEDBOOK, FETCH_STUDENTS } from '../../graphQl/graphql';


function IssuedBooksList({search}) {
    
    const books = useContext(BooksContext);
    const setbooks = useContext(BooksArrayContext);
    
    
    const [DeleteStudentshow, setDeleteStudentShow] = useState(false);
    const [primarykey, setprimarykey] = useState('');
    const [Title, setTitle] = useState()
    const [markFlag, setmarkFlag] = useState(false)

    const [bookFlag, setbookFlag] = useState(false)
    const {data:IssuedBookData,loading:IssueLoading,error:IssueError} = useQuery(FETCH_ISSUEDBOOK);
    const {data:BookData,loading:BookLoading,error:BookError} = useQuery(FETCH_BOOKS);
    const {data:StudentData,loading:StudentLoading,error:StudentError} = useQuery(FETCH_STUDENTS);
    
   
    const tempArray = IssuedBookData?.IssuedBooks.map((issued) => {
        if(issued.isreturn == false) {
            let obj = {
              id: issued.id,
              IssueDate: issued.IssuedDate,
              DueDate: issued.DueDate,
              return: issued.isreturn,
            };
            
            BookData?.books.map((book) => {
                if(book.id == issued.title) {
                    obj.booktitle = book.title;
                    obj.title = issued.title;
                    }
                })
            
                StudentData?.students.map((student) => {
                if(student.id == issued.name) {
                    obj.name = student.name;
                    }
                }) 
            var date1 = new Date();
            var date2 = new Date(issued.DueDate);
            var diff = new DateDiff(date1, date2);
            obj.fine = Math.round(diff.days())*10

            return(obj)
        }
    })

    if(IssueLoading) return <p className='pt-3'>loading data...</p>;
    if(IssueError) return <p className='fs-1'>ERROR 404 </p>;


    return (
        <>
            {tempArray.filter((tempValue) => {
                if(tempValue != undefined) {
                if(search == "") { return tempValue; }
                else if(tempValue.booktitle.toLowerCase().includes(search.toLowerCase())) { return tempValue }
                else if(tempValue.name.toLowerCase().includes(search.toLowerCase())) { return tempValue }
            }}).map((IssueBook)=>{
                
                return(
                    <div key={IssueBook.id} className="d-flex justify-content-between px-2 py-3 border-bottom blue">
                        <div className='col-2'>{IssueBook.booktitle}</div>
                        <div className='col-2'>{IssueBook.name}</div>
                        <div className='col-2'>{Moment(new Date(IssueBook.IssueDate)).format("DD-MM-YYYY")}</div>
                        <div className='col-2'>{Moment(new Date(IssueBook.DueDate)).format("DD-MM-YYYY")}</div>
                        <div className='col-2 ps-5'>{ IssueBook.fine < 0 ? "-" : IssueBook.fine }</div>
                        <div className='col-2 ps-5'><MdOutlineAssignmentReturn className='grey' data-tip="Mark as returned" onClick={()=>{
                            setDeleteStudentShow(true);
                            setprimarykey(IssueBook.id);
                            setTitle(IssueBook.title);
                            setmarkFlag(true)}}/>
                            </div>
                    </div>
                )
                    
            })}
            <ReactTooltip />
            <DeleteModal 
                show={DeleteStudentshow}
                setShow={setDeleteStudentShow}
                primarykey={primarykey}
                setprimarykey={setprimarykey}
                setbooks={setbooks}
                books={books}
                Title={Title}
                setTitle={setTitle}
                markFlag={markFlag}
                setmarkFlag={setmarkFlag}
                bookFlag={bookFlag}
                setbookFlag={setbookFlag}
                />
        </>
    )
}

export default IssuedBooksList