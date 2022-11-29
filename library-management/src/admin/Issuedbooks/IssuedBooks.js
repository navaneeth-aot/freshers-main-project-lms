import React from 'react';
import IssuedBooksList from './IssuedBooksList';

function IssuedBooks({search}) {
  return (
    <div className='box mt-4 bg-white px-4 border-box rounded montserrat'>
        <div className="d-flex justify-content-between px-2 py-3 border-bottom grey">
                <div className='col-2'>Book Title</div>
                <div className='col-2'>Student</div>
                <div className='col-2'>Issue Date</div>
                <div className='col-2'>Due Date</div>
                <div className='col-2'>Fine <br/>(Rs. 10 per day) </div>
                <div className='col-2 ps-4'>Actions</div>
        </div>
        <IssuedBooksList search={search}/>
    </div>
  )
}

export default IssuedBooks