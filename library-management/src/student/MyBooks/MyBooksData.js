import React from 'react';
import Moment from 'moment';

function MyBooksData({item}) {
  return (
    <div key={item.key} className="d-flex justify-content-between px-2 py-3 border-bottom blue">
        <div className='col-2'> {item.title} </div>
        <div className='col-2'> {item.author} </div>
        <div className='col-2'>{Moment(new Date(item.IssueDate)).format("DD-MM-YYYY")}</div>
        <div className='col-2'>{Moment(new Date(item.DueDate)).format("DD-MM-YYYY")}</div>
        <div className='col-2'>{ item.ReturnDate == "" ? "-" : Moment(new Date(item.ReturnDate)).format("DD-MM-YYYY") }</div>
        <div className='col-2 ps-5'> { item.fine < 0 ? 0 : item.fine } </div>
    </div>
  )
}

export default MyBooksData