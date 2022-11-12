import React from 'react';
import Logo_white from '../Images/Logo-white.png';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { MdMenuBook,MdTaskAlt,MdOutlinePeople } from 'react-icons/md';

function Sidebar() {
  return (
    <>
        <div className='col-md-2 d-flex flex-column justify-content-between px-4 sidebar-admin sticky'>
            <Nav defaultActiveKey="/Admin" className="flex-column gap-3">
                <div>
                    <div className='d-flex pe-5 pt-5'>
                        <img src={Logo_white} alt=""/>
                        <p className='logo'>LMC</p>
                    </div>
                </div>
                <Button className='mt-5 col-12 d-flex align-items-center gap-3'><MdTaskAlt/>Issued Books</Button>
                <Button className='col-12 d-flex align-items-center gap-3'><MdMenuBook/>All Books</Button>
                <Button className='col-12 d-flex align-items-center gap-3'><MdOutlinePeople/>Students</Button>
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