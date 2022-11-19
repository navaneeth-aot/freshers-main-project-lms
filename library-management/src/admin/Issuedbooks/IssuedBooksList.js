import React from 'react';
import { useContext } from 'react';
import { MdOutlineAssignmentReturn } from 'react-icons/md';
import { BooksContext , StudentContext , IssuedBooksContext } from '../../App';


function IssuedBooksList({search}) {
    const IssuedBook = useContext(IssuedBooksContext);
    const Students = useContext(StudentContext);
    const books = useContext(BooksContext);

    return (
            
        IssuedBook.map((IssueBook)=>{
            console.log(search)
            if(IssueBook.ReturnDate == "") {
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
                    <div className='col-2 ps-5'><MdOutlineAssignmentReturn className='grey'/></div>
                </div>
            )
            }
        
        })
    
    )
}

export default IssuedBooksList