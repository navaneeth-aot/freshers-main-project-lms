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

    const deleteStudent = (key) => { 
        setStudents(Student.filter((students) => students.key != key));
     }

    const editStudent = (key) => {
        seteditFlag(true);
        editsetShow(true);
    }

  return (
    Student.map((Students)=>{
        return(
            <>
            <div key={Students.key} className="d-flex justify-content-between px-2 py-3 border-bottom">
                <div className='col-5'> {Students.name} </div>
                <div className='col-5'> {Students.Email} </div>
                <div className='col-2 d-flex gap-3 ms-4 ps-2'>
                    <MdEdit className='grey' onClick={ () => { editStudent(Students.key) } } />
                    <FiTrash2 className='red' onClick={ () => { deleteStudent(Students.key) } } />
                    <FiEye className='grey' />
                </div>
                
            </div>
            <ModalAddStudent show={editshow} setShow={editsetShow} editFlag={editFlag} seteditFlag={seteditFlag} />
            </>
        )
    })
  )
}

export default StudentList