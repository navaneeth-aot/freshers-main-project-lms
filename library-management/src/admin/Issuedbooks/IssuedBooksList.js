import React, { useState } from 'react';
import { useContext } from 'react';
import { MdOutlineAssignmentReturn } from 'react-icons/md';
import { BooksContext , StudentContext , IssuedBooksContext , IssuedBooksArrayContext , BooksArrayContext } from '../../App';
import DeleteModal from '../DeleteModal';
import DateDiff from 'date-diff';
import ReactTooltip from 'react-tooltip';
import Moment from 'moment';


function IssuedBooksList({search}) {
    
    const Students = useContext(StudentContext);
    const books = useContext(BooksContext);
    const setbooks = useContext(BooksArrayContext);
    const IssuedBook = useContext(IssuedBooksContext);
    const setIssuedBook = useContext(IssuedBooksArrayContext);
    
    const [DeleteStudentshow, setDeleteStudentShow] = useState(false);
    const [primarykey, setprimarykey] = useState('');
    const [Title, setTitle] = useState()
    const [markFlag, setmarkFlag] = useState(false)

    const [bookFlag, setbookFlag] = useState(false)

    const tempArray = IssuedBook.map((issued) => {
        if(issued.return == false) {
            let obj ={ key:issued.key,title:issued.title,IssueDate:issued.IssueDate,DueDate:issued.DueDate,return:issued.return,fine:0 }
            books.map((book) => {
                if(book.key == issued.title) {
                    obj.booktitle = book.title
                    }
                })
            Students.map((object) => {
                if(object.key == issued.name) {
                    obj.name = object.name
                    }
                }) 
            var date1 = new Date();
            var date2 = new Date(issued.DueDate);
            var diff = new DateDiff(date1, date2);
            obj.fine = Math.floor(diff.days())*10

            return(obj)
        }
    })
    return (
        tempArray.filter((tempValue) => {
            if(tempValue != undefined) {
            if(search == "") { return tempValue; }
            else if(tempValue.booktitle.toLowerCase().includes(search.toLowerCase())) { return tempValue }
            else if(tempValue.name.toLowerCase().includes(search.toLowerCase())) { return tempValue }
        }}).map((IssueBook)=>{
            
            return(
                <div key={IssueBook.key} className="d-flex justify-content-between px-2 py-3 border-bottom blue">
                    <div className='col-2'>{IssueBook.booktitle}</div>
                    <div className='col-2'>{IssueBook.name}</div>
                    <div className='col-2'>{Moment(new Date(IssueBook.IssueDate)).format("DD-MM-YYYY")}</div>
                    <div className='col-2'>{Moment(new Date(IssueBook.DueDate)).format("DD-MM-YYYY")}</div>
                    <div className='col-2 ps-5'>{ IssueBook.fine < 0 ? "-" : IssueBook.fine }</div>
                <div className='col-2 ps-5'><MdOutlineAssignmentReturn className='grey' data-tip="Mark as returned" onClick={()=>{
                    setDeleteStudentShow(true);
                    setprimarykey(IssueBook.key);
                    setTitle(IssueBook.title);
                    setmarkFlag(true)}}/></div>
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
                </div>
            )
                
        })
    
    )
}

export default IssuedBooksList