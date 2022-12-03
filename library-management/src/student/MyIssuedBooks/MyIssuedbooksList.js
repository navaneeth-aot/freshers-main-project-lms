import React from 'react';
import { useContext } from 'react';
import { FiEye } from 'react-icons/fi';
import { BooksContext } from '../../App';

function MyIssuedbooksList({search,sortValue}) {
    const books = useContext(BooksContext);

    if(sortValue == 1) {
        books.sort((a, b) => {
            if ( a.title < b.title ) { return -1 }
            if ( a.title > b.title ) { return 1 }
            return 0;
        })
    }

    if(sortValue == 2) {
        books.sort((a, b) => {
            if ( a.author < b.author ) { return -1 }
            if ( a.author > b.author ) { return 1 }
            return 0;
        })
    }
    

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
                if(search === "") { return book; }
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

export default MyIssuedbooksList