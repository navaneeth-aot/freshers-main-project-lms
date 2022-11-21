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
    const [primarykey, setprimarykey] = useState();
    const [Title, setTitle] = useState()
    const [markFlag, setmarkFlag] = useState(false)

    const [bookFlag, setbookFlag] = useState(false)

    return (
            
        // IssuedBook.filter((object) => {
        //     if(search == "") { return object }
        //     else if(books.map((book) => { if(book.key == object.title) {
        //         console.log(book.title);
        //         return(book.title);
        //     } }).includes(search)) { return object }








        //     // else if(Students.map((item) => {
        //     //     if(item.key == object.name) { return (item) }
        //     //         }).toLowerCase().includes(search.toLowerCase())) { return object }
        // })

        IssuedBook.map((IssueBook)=>{
            if(IssueBook.return == false) {
            return(
                <div key={IssueBook.key} className="d-flex justify-content-between px-2 py-3 border-bottom">
                    <div className='col-2'>
                        {books.map((book) => {
                            if(book.key == IssueBook.title)
                                return (
                                    <>
                                        {book.title}
                                    </>
                                );
                            }
                        )}
                    </div>
                    <div className='col-2'>
                        {Students.map((object) => {
                            if(object.key == IssueBook.name)
                                return (
                                    <>
                                        {object.name}
                                    </>
                                );
                            }
                        )}
                    </div>
                    <div className='col-2'>{IssueBook.IssueDate}</div>
                    <div className='col-2'>{IssueBook.DueDate}</div>
                    <div className='col-2 ps-5'>{IssueBook.fine}</div>
                <div className='col-2 ps-5'><MdOutlineAssignmentReturn className='grey' onClick={()=>{
                    setDeleteStudentShow(true);
                    setprimarykey(IssueBook.key);
                    setmarkFlag(true)}}/></div>
                <DeleteModal 
                    show={DeleteStudentshow}
                    setShow={setDeleteStudentShow}
                    primarykey={primarykey}
                    setprimarykey={setprimarykey}
                    setbooks={setbooks}
                    books={books}
                    setIssuedBook={setIssuedBook}
                    IssuedBook={IssuedBook}
                    Title={Title}
                    setTitle={setTitle}
                    markFlag={markFlag}
                    setmarkFlag={setmarkFlag}
                    bookFlag={bookFlag}
                    setbookFlag={setbookFlag}
                    />
                </div>
            )
            }
        
        })
    
    )
}

export default IssuedBooksList