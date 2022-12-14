import React,{useContext,useState} from 'react'
import { MdEdit } from 'react-icons/md';
import { FiEye,FiTrash2 } from 'react-icons/fi';
import { StudentContext } from '../../App';
import ModalAddStudent from './ModalAddStudent';
import DeleteModal from '../DeleteModal';
import {Link, Outlet} from 'react-router-dom';



function StudentList({search}) {
    const Student = useContext(StudentContext);

    const [editFlag, seteditFlag] = useState(false);
    const [editshow, editsetShow] = useState(false);
    const [primarykey, setprimarykey] = useState();
    const [details, setdetails] = useState();
    const [editname, seteditname] = useState("");
    const [editEmail, seteditEmail] = useState("");
    const [editpassword, seteditpassword] = useState('')
    const [editpasswordConfirm, seteditpasswordConfirm] = useState('')

    const [DeleteStudentshow, setDeleteStudentShow] = useState(false);

    const [bookFlag, setbookFlag] = useState(false)
    const [markFlag, setmarkFlag] = useState(false)

  return (
    Student.filter((student) => {
        if(search == "") { return student }
        else if(student.name.toLowerCase().includes(search.toLowerCase())) { return student }
        else if(student.Email.toLowerCase().includes(search.toLowerCase())) { return student }
    }).map((Students)=>{
        return(
            <>
                <div key={Students.key} className="d-flex justify-content-between px-2 py-3 border-bottom blue">
                    <div className='col-5'> {Students.name} </div>
                    <div className='col-5'> {Students.Email} </div>
                    <div className='col-2 d-flex gap-3 ms-4 ps-2 align-items-center'>
                        <MdEdit className='grey' onClick={ () => { 
                            seteditFlag(true);
                            editsetShow(true);
                            setprimarykey(Students.key);
                            seteditEmail(Students.Email);
                            seteditname(Students.name);
                            seteditpassword(Students.password);
                            seteditpasswordConfirm(Students.password); } } />
                        <FiTrash2 className='red' onClick={ () => { 
                            setDeleteStudentShow(true);
                            setprimarykey(Students.key); } } />
                        <Link to={`/Studentsdetails/${Students.key}`}><FiEye className='grey'/></Link>
                    </div>
                </div>
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
                <Outlet />
            </>
        )
    })
  )
}

export default StudentList