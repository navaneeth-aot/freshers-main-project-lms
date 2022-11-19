import React, {useState } from 'react';
import IssuedBooks from './IssuedBooks';
import IssueSearch from './IssueSearch';

function IssuedBooksPage() {
  const [search, setsearch] = useState("")

  return (
    <div className='col-md-10 p-5 backcolor'>
        <IssueSearch search={search} setsearch={setsearch}/>
        <IssuedBooks search={search}/>
    </div>
  )
}

export default IssuedBooksPage