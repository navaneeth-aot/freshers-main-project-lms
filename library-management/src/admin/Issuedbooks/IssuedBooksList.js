import React from 'react';
import { useContext } from 'react';
import { MdOutlineAssignmentReturn } from 'react-icons/md';
import { BooksContext , StudentContext , IssuedBooksContext } from '../../App';


function IssuedBooksList({search}) {
    const IssuedBook = useContext(IssuedBooksContext);
    const Students = useContext(StudentContext);
    const books = useContext(BooksContext);

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