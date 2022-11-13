import React from 'react';
import IssuedBooks from './IssuedBooks';
import IssueSearch from './IssueSearch';

function IssuedBooksPage() {
  return (
    <div className='col-md-10 p-5 backcolor'>
        <IssueSearch />
        <IssuedBooks />
    </div>
  )
}

export default IssuedBooksPage