import React from 'react';
import { useContext , useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { BooksArrayContext , BooksContext } from '../../App';
import ModalAllbooks from './ModalAllbooks';

function AllbooksList() {
    const books = useContext(BooksContext);
    const setbooks = useContext(BooksArrayContext);
    const [BookEditFlag, setBookEditFlag] = useState(false);
    const [editBooksetShow, setEditBooksetShow] = useState(false);
    const [primarykey, setprimarykey] = useState();
    const [editTitle, seteditTitle] = useState("");
    const [editAuthor, seteditAuthor] = useState("");
    const [editLanguage, seteditLanguage] = useState('')
    const [editTotal, seteditTotal] = useState('')
    const [editRemaining, seteditRemaining] = useState('')

    const deletebook = (key) => { 
        setbooks(books.filter((book) => book.key != key));
     }


  return (

    books.map((books)=>{

        return(
            <div key={books.key} className="d-flex justify-content-between px-2 py-3 border-bottom">
                <div className='col-2'>{ books.title }</div>
                <div className='col-2'>{ books.author }</div>
                <div className='col-2'>{ books.language }</div>
                <div className='col-2 ps-4 ms-2'>{ books.total }</div>
                <div className='col-2 ps-4'>{ books.remaining }</div>
                <div className='col-2 d-flex gap-3 ps-5'>
                    <MdEdit className='grey' onClick={ () => { 
                            setBookEditFlag(true);
                            setEditBooksetShow(true);
                            setprimarykey(books.key);
                            seteditTitle(books.title);
                            seteditAuthor(books.author);
                            seteditLanguage(books.language);
                            seteditTotal(books.total);
                            seteditRemaining(books.remaining);
                            } } />
                    <FiTrash2 className='red' onClick={ () => { deletebook(books.key) } } />
                </div>
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
            </div>
        )
    })
  )
}

export default AllbooksList