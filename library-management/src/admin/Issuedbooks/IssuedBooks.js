import React from 'react';
import IssuedBooksList from './IssuedBooksList';

function IssuedBooks() {
  return (
    <div className='box mt-4 bg-white px-5 border-box rounded'>
        <div className="d-flex justify-content-between px-2 py-3 border-bottom">
                <div className='col-2'>Book Title</div>
                <div className='col-2'>Student</div>
                <div className='col-2'>Issue Date</div>
                <div className='col-2'>Due Date</div>
                <div className='col-2'>Fine <br/>(Rs. 10 per day) </div>
                <div className='col-2 ms-5'>Actions</div>
        </div>
        <IssuedBooksList />
    </div>
  )
}

export default IssuedBooks