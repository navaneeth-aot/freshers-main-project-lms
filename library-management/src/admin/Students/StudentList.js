import React,{useContext,useState} from 'react'
import { MdEdit } from 'react-icons/md';
import { FiEye,FiTrash2 } from 'react-icons/fi';
import { StudentContext , StudentArrayContext } from '../../App';
import ModalAddStudent from './ModalAddStudent';



function StudentList() {
    const Student = useContext(StudentContext);
    const setStudents = useContext(StudentArrayContext);
    const [editFlag, seteditFlag] = useState(false);
    const [editshow, editsetShow] = useState(false);
    const [primarykey, setprimarykey] = useState();
    const [editname, seteditname] = useState("");
    const [editEmail, seteditEmail] = useState("");
    const [editpassword, seteditpassword] = useState('')
    const [editpasswordConfirm, seteditpasswordConfirm] = useState('')

    const deleteStudent = (deletekey) => { 
        setStudents(Student.filter((students) => students.key != deletekey));
        setprimarykey(deletekey)
     }

  return (
    Student.map((Students)=>{
        return(
            <>
                <div key={Students.key} className="d-flex justify-content-between px-2 py-3 border-bottom">
                    <div className='col-5'> {Students.name} </div>
                    <div className='col-5'> {Students.Email} </div>
                    <div className='col-2 d-flex gap-3 ms-4 ps-2'>
                        <MdEdit className='grey' onClick={ () => { 
                            seteditFlag(true);
                            editsetShow(true);
                            setprimarykey(Students.key);
                            seteditEmail(Students.Email);
                            seteditname(Students.name);
                            seteditpassword(Students.password);
                            seteditpasswordConfirm(Students.password); } } />
                        <FiTrash2 className='red' onClick={ () => { deleteStudent(Students.key) } } />
                        <FiEye className='grey' />
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
            </>
        )
    })
  )
}

export default StudentList