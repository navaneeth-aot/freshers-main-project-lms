import React ,{ useState } from 'react';
import Allbooks from './Allbooks';
import AllbooksSearch from './AllbooksSearch';

function AllbooksPage() {
  const [search, setsearch] = useState("")

  return (
    <div className='col-md-10 p-5 backcolor'>
        <AllbooksSearch setsearch={setsearch}/>
        <Allbooks search={search}/>
    </div>
  )
}

export default AllbooksPage