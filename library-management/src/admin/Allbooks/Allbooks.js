import React from 'react';
import AllbooksList from './AllbooksList';

function Allbooks({search}) {
  
  return (
    <div className='box mt-4 bg-white px-5 border-box rounded'>
        <div className="d-flex justify-content-between px-2 py-3 border-bottom grey">
                <div className='col-2'>Book Title</div>
                <div className='col-2'>Author</div>
                <div className='col-2'>Language</div>
                <div className='col-2'>Total Copies</div>
                <div className='col-2'>Remaining</div>
                <div className='col-2 ps-5 ms-2'>Actions</div>
        </div>
        <AllbooksList search={search}/>
    </div>
  )
}

export default Allbooks