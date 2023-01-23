import React from 'react';
import { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import ModalAllbooks from './ModalAllbooks';
import DeleteModal from '../DeleteModal';
import { useQuery } from '@apollo/client';
import { FETCH_BOOKS } from '../../graphQl/graphql';

function AllbooksList({search}) {

    const [BookEditFlag, setBookEditFlag] = useState(false);
    const [editBooksetShow, setEditBooksetShow] = useState(false);
    const [primarykey, setprimarykey] = useState();
    const [editTitle, seteditTitle] = useState("");
    const [editAuthor, seteditAuthor] = useState("");
    const [editLanguage, seteditLanguage] = useState('')
    const [editTotal, seteditTotal] = useState(0)
    const [editRemaining, seteditRemaining] = useState(0)

    const [DeleteBooksShow, setDeleteBooksShow] = useState(false);
    const [bookFlag, setbookFlag] = useState(false)
    const [markFlag, setmarkFlag] = useState(false)

    const {data,loading,error} = useQuery(FETCH_BOOKS);

    if(loading) return <p className='pt-3'>loading data...</p>;
    if(error) return <p className='fs-1'>ERROR 404 </p>;


  return (
    <>
        {data.books.filter((object) => {
            if(search == "") { return object }
            else if(object.title.toLowerCase().includes(search.toLowerCase())) { return object }
            else if(object.author.toLowerCase().includes(search.toLowerCase())) { return object }
        }).map((books)=>{

            return(
                <div key={books.id} className="d-flex justify-content-between px-2 py-3 border-bottom blue">
                    <div className='col-2'>{ books.title }</div>
                    <div className='col-2'>{ books.author }</div>
                    <div className='col-2'>{ books.language }</div>
                    <div className='col-2 ps-4 ms-2'>{ books.total }</div>
                    <div className='col-2 ps-4'>{ books.remaining }</div>
                    <div className='col-2 d-flex gap-3 ps-5 pt-1'>
                        <MdEdit className='grey' onClick={ () => { 
                                setBookEditFlag(true);
                                setEditBooksetShow(true);
                                setprimarykey(books.id);
                                seteditTitle(books.title);
                                seteditAuthor(books.author);
                                seteditLanguage(books.language);
                                seteditTotal(books.total);
                                seteditRemaining(books.remaining);
                                } } />
                        <FiTrash2 className='red' onClick={ () => { 
                            setDeleteBooksShow(true);
                            setbookFlag(true);
                            setprimarykey(books.id); } } />
                    </div>

                </div>
            )
        })}
        <ModalAllbooks 
            show={editBooksetShow} 
            setShow={setEditBooksetShow} 
            BookEditFlag={BookEditFlag} 
            setBookEditFlag={setBookEditFlag} 
            primarykey={primarykey}
            editTitle={editTitle} 
            editAuthor={editAuthor}
            editLanguage={editLanguage}
            editTotal={editTotal}
            editRemaining={editRemaining}
            seteditTitle={seteditTitle}
            seteditAuthor={seteditAuthor}
            seteditLanguage={seteditLanguage}
            seteditTotal={seteditTotal}
            seteditRemaining={seteditRemaining}
            />

        <DeleteModal 
            show={DeleteBooksShow}
            primarykey={primarykey}
            bookFlag={bookFlag}
            markFlag={markFlag}
            setShow={setDeleteBooksShow}
            setprimarykey={setprimarykey}
            setbookFlag={setbookFlag}
            setmarkFlag={setmarkFlag}
            />
    </>
  )
}

export default AllbooksList