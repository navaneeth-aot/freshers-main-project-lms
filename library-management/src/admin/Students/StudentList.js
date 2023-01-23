import React,{useContext,useState} from 'react'
import { MdEdit } from 'react-icons/md';
import { FiEye,FiTrash2 } from 'react-icons/fi';
import ModalAddStudent from './ModalAddStudent';
import DeleteModal from '../DeleteModal';
import {Link, Outlet} from 'react-router-dom';
import { FETCH_STUDENTS } from '../../graphQl/graphql';
import { useQuery } from '@apollo/client';


function StudentList({search}) {

    const [editFlag, seteditFlag] = useState(false);
    const [editshow, editsetShow] = useState(false);
    const [primarykey, setprimarykey] = useState();
    const [editname, seteditname] = useState("");
    const [editEmail, seteditEmail] = useState("");
    const [editpassword, seteditpassword] = useState('')
    const [editpasswordConfirm, seteditpasswordConfirm] = useState('')

    const [DeleteStudentshow, setDeleteStudentShow] = useState(false);

    const [bookFlag, setbookFlag] = useState(false)
    const [markFlag, setmarkFlag] = useState(false)

    const {data,loading,error} = useQuery(FETCH_STUDENTS);

  if(loading) return <p className='pt-3'>loading data...</p>;
  if(error) return <p className='fs-1'>ERROR 404 </p>;

  return (
    <>
        {data.students.filter((student) => {
            if(search == "") { return student }
            else if(student.name.toLowerCase().includes(search.toLowerCase())) { return student }
            else if(student.Email.toLowerCase().includes(search.toLowerCase())) { return student }
        }).map((Students)=>{
            return(
                <div key={Students.id}>
                    <div className="d-flex justify-content-between px-2 py-3 border-bottom blue">
                        <div className='col-5'> {Students.name} </div>
                        <div className='col-5'> {Students.Email} </div>
                        <div className='col-2 d-flex gap-3 ms-4 ps-2 align-items-center'>
                            <MdEdit className='grey' onClick={ () => { 
                                seteditFlag(true);
                                editsetShow(true);
                                setprimarykey(Students.id);
                                seteditEmail(Students.Email);
                                seteditname(Students.name);
                                seteditpassword(Students.password);
                                seteditpasswordConfirm(Students.password); } } />
                            <FiTrash2 className='red' onClick={ () => { 
                                setDeleteStudentShow(true);
                                setprimarykey(Students.id); } } />
                            <Link to={`/Studentsdetails/${Students.id}`}><FiEye className='grey'/></Link>
                        </div>
                    </div>
                    

                    
                    <Outlet />
                </div>
            )
        })}
        <ModalAddStudent 
            show={editshow} 
            setShow={editsetShow} 
            editFlag={editFlag} 
            seteditFlag={seteditFlag} 
            primarykey={primarykey}
            editEmail={editEmail} 
            editname={editname}
            editpassword={editpassword}
            seteditname={seteditname}
            seteditEmail={seteditEmail}
            seteditpassword={seteditpassword}          
            editpasswordConfirm={editpasswordConfirm}
            seteditpasswordConfirm={seteditpasswordConfirm}
            />
            
        <DeleteModal 
            show={DeleteStudentshow}
            setShow={setDeleteStudentShow}
            primarykey={primarykey}
            setprimarykey={setprimarykey}
            bookFlag={bookFlag}
            setbookFlag={setbookFlag}
            markFlag={markFlag}
            setmarkFlag={setmarkFlag}
            />
    </>
  )
}

export default StudentList