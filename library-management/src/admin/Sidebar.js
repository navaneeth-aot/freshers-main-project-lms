import React from 'react';
import Logo_white from '../Images/Logo-white.png';
import Nav from 'react-bootstrap/Nav';
import { MdMenuBook,MdTaskAlt,MdOutlinePeople } from 'react-icons/md';
import {Link} from 'react-router-dom';


function Sidebar() {
    
  return (
    <>
        <div className='col-md-2 d-flex flex-column justify-content-between px-4 sidebar-admin sticky'>
            <Nav className="flex-column gap-3">
                <div>
                    <div className='d-flex  pe-5 pt-5'>
                        <img src={Logo_white} alt=""/>
                    </div>
                </div>
                <Link to="/issuedbooks" className='btn btn-primary mt-5 col-12 d-flex align-items-center gap-3'><MdTaskAlt/>Issued Books</Link>
                <Link to="/allbooks" className='btn btn-primary col-12 d-flex align-items-center gap-3'><MdMenuBook/>All Books</Link>
                <Link to="/studentsPage" className='btn btn-primary col-12 d-flex align-items-center gap-3'><MdOutlinePeople/>Students</Link>
            </Nav>
            <div className='sticky-bottom'>
                <hr></hr>
                Admin
            </div>
        </div>
    </>
  )
}

export default Sidebar