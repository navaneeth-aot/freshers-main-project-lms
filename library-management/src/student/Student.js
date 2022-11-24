import React from 'react'
import Logo_white from '../Images/Logo-white.png';
import Nav from 'react-bootstrap/Nav';
import { MdMenuBook,MdTaskAlt,MdOutlinePeople } from 'react-icons/md';
import {Link} from 'react-router-dom';

function Student() {
  return (
    <div className='d-flex'>
        <div className='col-md-2 d-flex flex-column justify-content-between px-4 sidebar-student sticky'>
            <Nav defaultActiveKey="/student" className="flex-column gap-3">
                <div>
                    <div className='d-flex  pe-5 pt-5'>
                        <img src={Logo_white} alt=""/>
                    </div>
                </div>
                <Link to="/mybooks" className='btn btn-info mt-5 col-12 d-flex align-items-center gap-3'><MdMenuBook/>My Books</Link>
                <Link to="/myissuedbooks" className='btn btn-info col-12 d-flex align-items-center gap-3'><MdTaskAlt/>Issued Books</Link>
            </Nav>
            <div className='sticky-bottom'>
                <hr></hr>
                Student
            </div>
        </div>
        <div className='col-md-10 bg-success'>
            
        </div>
    </div>
  )
}

export default Student