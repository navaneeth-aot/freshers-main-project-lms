import React from 'react';
import { useContext } from 'react';
import { MdEdit } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { BooksArrayContext , BooksContext } from '../../App';

function AllbooksList() {
    const books = useContext(BooksContext);
    const setbooks = useContext(BooksArrayContext);

    const deletebook = (key) => { 
        setbooks(books.filter((book) => book.key != key));
     }

    const editbook = (key) => {
        
    }
    
  return (

    books.map((books)=>{

        return(
            <div key={books.key} className="d-flex justify-content-between px-2 py-3 border-bottom">
                <div className='col-2'>{ books.title }</div>
                <div className='col-2'>{ books.author }</div>
                <div className='col-2'>{ books.language }</div>
                <div className='col-2 ps-4 ms-2'>{ books.total }</div>
                <div className='col-2 ps-4'>{ books.remaining }</div>
                <div className='col-2 d-flex gap-3 ps-5'>
                    <MdEdit className='grey' onClick={ () => { editbook(books.key) } } />
                    <FiTrash2 className='red' onClick={ () => { deletebook(books.key) } } />
                </div>
            </div>
        )
    })
  )
}

export default AllbooksList