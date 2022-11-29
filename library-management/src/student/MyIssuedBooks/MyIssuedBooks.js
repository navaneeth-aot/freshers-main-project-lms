import React ,{ useState } from 'react';
import MyIssuedbooksList from './MyIssuedbooksList';
import MyIssuedbooksSearch from './MyIssuedbooksSearch';

function MyIssuedBooks() {
  const [search, setsearch] = useState("")
  return (
    <div className='col-md-12 p-5'>
        <MyIssuedbooksSearch setsearch={setsearch}/>
        <MyIssuedbooksList search={search}/>
    </div>
  )
}

export default MyIssuedBooks