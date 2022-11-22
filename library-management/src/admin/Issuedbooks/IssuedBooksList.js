import React, { useState } from 'react';
import { useContext } from 'react';
import { MdOutlineAssignmentReturn } from 'react-icons/md';
import { BooksContext , StudentContext , IssuedBooksContext , IssuedBooksArrayContext , BooksArrayContext } from '../../App';
import DeleteModal from '../DeleteModal';


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
            let obj ={ key:issued.key,IssueDate:issued.IssueDate,DueDate:issued.DueDate,return:issued.return }
            books.map((book) => {
                if(book.key == issued.title) {
                    obj.title = book.title
                    }
                })
            Students.map((object) => {
                if(object.key == issued.name) {
                    obj.name = object.name
                    }
                })
            return(obj)
        }
    })
    return (
        tempArray.filter((tempValue) => {
            if(search == "") { return tempValue }
            else if(tempValue.title.toLowerCase().includes(search.toLowerCase())) { return tempValue }
            else if(tempValue.name.toLowerCase().includes(search.toLowerCase())) { return tempValue }
        }).map((IssueBook)=>{
            
            return(
                <div key={IssueBook.key} className="d-flex justify-content-between px-2 py-3 border-bottom">
                    <div className='col-2'>{IssueBook.title}</div>
                    <div className='col-2'>{IssueBook.name}</div>
                    <div className='col-2'>{IssueBook.IssueDate}</div>
                    <div className='col-2'>{IssueBook.DueDate}</div>
                    <div className='col-2 ps-5'>-</div>
                <div className='col-2 ps-5'><MdOutlineAssignmentReturn className='grey' onClick={()=>{
                    setDeleteStudentShow(true);
                    setprimarykey(IssueBook.key);
                    setTitle(IssueBook.title);
                    setmarkFlag(true)}}/></div>
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