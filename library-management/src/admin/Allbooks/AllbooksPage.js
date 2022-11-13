import React from 'react';
import Allbooks from './Allbooks';
import AllbooksSearch from './AllbooksSearch';

function AllbooksPage() {
  return (
    <div className='col-md-10 p-5 backcolor'>
        <AllbooksSearch />
        <Allbooks />
    </div>
  )
}

export default AllbooksPage