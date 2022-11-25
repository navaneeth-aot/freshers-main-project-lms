import React from 'react';
import { useContext , useState } from 'react';
import Moment from 'moment';
import DateDiff from 'date-diff';
import { MdEdit } from 'react-icons/md';
import { FiEye } from 'react-icons/fi';
import { BooksContext , IssuedBooksContext , StudentContext } from '../../App';

function AllbooksList({search}) {
    const books = useContext(BooksContext);
    const IssuedBook = useContext(IssuedBooksContext); 
    const Students = useContext(StudentContext);

    const tempArray = IssuedBook.map((issued) => {
        if(issued.return == false) {
            let obj ={ key:issued.key,title:issued.title,IssueDate:issued.IssueDate,DueDate:issued.DueDate,return:issued.return,fine:0 }
            books.map((book) => {
                if(book.key == issued.title) {
                    obj.booktitle = book.title
                    }
                })
            Students.map((object) => {
                if(object.key == issued.name) {
                    obj.name = object.name
                    }
                }) 
            var date1 = new Date();
            var date2 = new Date(issued.DueDate);
            var diff = new DateDiff(date1, date2);
            obj.fine = Math.round(diff.days())*10

            return(obj)
        }
    })
    return (
        <>
            <div className="d-flex justify-content-between px-2 py-3 mt-5 border-bottom grey bg-white">
                <div className='col-2'>Book Title</div>
                <div className='col-2'>Student</div>
                <div className='col-2'>Issue Date</div>
                <div className='col-2'>Due Date</div>
                <div className='col-2'>Fine <br/>(Rs. 10 per day) </div>
                <div className='col-2 ps-4'>Actions</div>
            </div>
            
            
            {tempArray.filter((tempValue) => {
                if(tempValue != undefined) {
                if(search == "") { return tempValue; }
                else if(tempValue.booktitle.toLowerCase().includes(search.toLowerCase())) { return tempValue }
                else if(tempValue.name.toLowerCase().includes(search.toLowerCase())) { return tempValue }
            }}).map((IssueBook)=>{

            return(
                <div key={IssueBook.key} className="d-flex justify-content-between px-2 py-3 border-bottom blue bg-white">
                        <div className='col-2'>{IssueBook.booktitle}</div>
                        <div className='col-2'>{IssueBook.name}</div>
                        <div className='col-2'>{Moment(new Date(IssueBook.IssueDate)).format("DD-MM-YYYY")}</div>
                        <div className='col-2'>{Moment(new Date(IssueBook.DueDate)).format("DD-MM-YYYY")}</div>
                        <div className='col-2 ps-5'>{ IssueBook.fine < 0 ? "-" : IssueBook.fine }</div>
                        <div className='col-2 ps-5'><FiEye className='grey' /></div>
                </div>
            )
        })}
    </>
  )
}

export default AllbooksList