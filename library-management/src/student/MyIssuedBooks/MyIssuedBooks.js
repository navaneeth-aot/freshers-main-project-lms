import React ,{ useState } from 'react';
import MyIssuedbooksList from './MyIssuedbooksList';
import MyIssuedbooksSearch from './MyIssuedbooksSearch';

function MyIssuedBooks() {
  const [search, setsearch] = useState("");
  const [sortValue, setsortValue] = useState();
  return (
    <div className='col-md-12 p-5'>
        <MyIssuedbooksSearch setsearch={setsearch} setsortValue={setsortValue}/>
        <MyIssuedbooksList search={search} sortValue={sortValue}/>
    </div>
  )
}

export default MyIssuedBooks