import React , { useState } from 'react';
import MyBooksList from './MyBooksList';
import MyBooksSearch from './MyBooksSearch';
import {useLocation} from 'react-router-dom';

function MyBooks() {
  const [search, setsearch] = useState("")
  const location = useLocation();
  const id = location.state.id;
  const [sortValue, setsortValue] = useState()
  
  return (
    <div className='col-md-12 p-5'>
        <MyBooksSearch setsearch={setsearch} setsortValue={setsortValue}/>
        <MyBooksList search={search} id={id} sortValue={sortValue}/>
    </div>
  )
}

export default MyBooks