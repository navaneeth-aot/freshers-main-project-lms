import React , { useState } from 'react';
import MyBooksList from './MyBooksList';
import MyBooksSearch from './MyBooksSearch';
import {useLocation} from 'react-router-dom';

function MyBooks() {
  const [search, setsearch] = useState("")
  const location = useLocation();
  const [id, setid] = useState(location.state.id);
  return (
    <div className='col-md-12 p-5'>
        <MyBooksSearch setsearch={setsearch}/>
        <MyBooksList search={search} id={id}/>
    </div>
  )
}

export default MyBooks