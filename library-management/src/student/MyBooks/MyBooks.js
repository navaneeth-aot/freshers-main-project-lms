import React , { useState } from 'react';
import MyBooksList from './MyBooksList';
import MyBooksSearch from './MyBooksSearch';

function MyBooks() {
  const [search, setsearch] = useState("")
  return (
    <div className='col-md-12 p-5'>
        <MyBooksSearch setsearch={setsearch}/>
        <MyBooksList search={search}/>
    </div>
  )
}

export default MyBooks