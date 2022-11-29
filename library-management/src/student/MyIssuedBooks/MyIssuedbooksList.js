import React from 'react';
import { useContext , useState } from 'react';
import Moment from 'moment';
import DateDiff from 'date-diff';
import { MdEdit } from 'react-icons/md';
import { FiEye } from 'react-icons/fi';
import { BooksContext , IssuedBooksContext , StudentContext } from '../../App';

function AllbooksList({search}) {
    const books = useContext(BooksContext);
    const IssuedBook = useContext(IssuedBooksContext); 
    const Students = useContext(StudentContext);

    //const tempArray = IssuedBook.map((issued) => {
    //     if(issued.return == false) {
    //         let obj ={ key:issued.key,title:issued.title,IssueDate:issued.IssueDate,DueDate:issued.DueDate,return:issued.return,fine:0 }
    //         books.map((book) => {
    //             if(book.key == issued.title) {
    //                 obj.booktitle = book.title
    //                 obj.authorName = book.author
    //                 obj.language = book.language
    //                 obj.total = book.total
    //                 obj.remaining = book.remaining
    //                 }
    //             })
    //         return(obj)
    //     }
    // })
    return (
        <div className='px-4 bg-white'>
            <div className="d-flex justify-content-between px-2 py-3 mt-5 border-bottom grey bg-white">
                <div className='col-2'>Book Title</div>
                <div className='col-2'>Author</div>
                <div className='col-2'>Language</div>
                <div className='col-2'>Total Copies</div>
                <div className='col-2'>Remaining</div>
                <div className='col-2 ps-4'>Actions</div>
            </div>
            
            
            {books.filter((book) => {
                if(search == "") { return book; }
                else if(book.title.toLowerCase().includes(search.toLowerCase())) { return book }
                else if(book.author.toLowerCase().includes(search.toLowerCase())) { return book }
            }).map((item)=>{

            return(
                <div key={item.key} className="d-flex justify-content-between px-2 py-3 border-bottom blue bg-white">
                        <div className='col-2'>{item.title}</div>
                        <div className='col-2'>{item.author}</div>
                        <div className='col-2'>{item.language}</div>
                        <div className='col-2 ps-4'>{item.total}</div>
                        <div className='col-2 ps-4'>{ item.remaining}</div>
                        <div className='col-2 ps-5'><FiEye className='grey' /></div>
                </div>
            )
        })}
    </div>
  )
}

export default AllbooksList