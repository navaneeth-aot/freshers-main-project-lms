import React from 'react';
import Logo_white from '../Images/Logo-white.png';
import admin from '../Images/manveer 1.png';
import Nav from 'react-bootstrap/Nav';
import { MdMenuBook,MdTaskAlt,MdOutlinePeople } from 'react-icons/md';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

function Sidebar() {
    
  return (
    <>
        <div className='col-md-2 d-flex flex-column justify-content-between px-4 sidebar-admin sticky'>
            <Nav defaultActiveKey="/Admin" className="flex-column gap-3">
                <div>
                    <div className='d-flex  pe-5 pt-5'>
                        <img src={Logo_white} alt=""/>
                    </div>
                </div>
                <Link to="/issuedbooks" className='btn btn-primary mt-5 col-12 d-flex align-items-center gap-3'><MdTaskAlt/>Issued Books</Link>
                <Link to="/allbooks" className='btn btn-primary col-12 d-flex align-items-center gap-3'><MdMenuBook/>All Books</Link>
                <Link to="/studentsPage" className='btn btn-primary col-12 d-flex align-items-center gap-3'><MdOutlinePeople/>Students</Link>
            </Nav>
            <div className='sticky-bottom pb-4 border-top pt-3 d-flex gap-2 col-12'>
                <Link to = "/Login"><img src={admin} alt="" data-tip="Log Out" className='col-2 profile'/></Link>
                <ReactTooltip />
                <div className='text-white col-7'>
                    <div className='col-12'>Orlando Diggs</div>
                    <div className='adminEmail pt-2 col-12'>orlandodiggs@lmt.com</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar