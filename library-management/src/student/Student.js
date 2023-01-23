import React , {useContext} from 'react'
import Logo_white from '../Images/Logo-white.png';
import profile from '../Images/Student_profile.png';
import ReactTooltip from 'react-tooltip';
import Nav from 'react-bootstrap/Nav';
import { MdMenuBook,MdTaskAlt } from 'react-icons/md';
import { Link , Outlet } from 'react-router-dom';
import { FETCH_STUDENTS } from '../graphQl/graphql';
import { useQuery } from '@apollo/client';

function Student({user}) {
    const {data,loading,error} = useQuery(FETCH_STUDENTS)
    
    if(loading) return <p className='pt-3'>loading data...</p>;
    if(error) return <p className='fs-1'>ERROR 404 </p>;


    const userDetails = data.students.find((item)=> {
       return item.id === user
    })
    
  return (
    <div className='d-flex'>
        <div className='col-md-2 d-flex flex-column justify-content-between px-4 sidebar-student sticky'>
            <Nav defaultActiveKey="/student" className="flex-column gap-3">
                <div>
                    <div className='d-flex  pe-5 pt-5'>
                        <img src={Logo_white} alt=""/>
                    </div>
                </div>
                <Link to="/myBooks" state={{ id: userDetails.id }} className='btn btn-success mt-5 col-12 d-flex align-items-center gap-3'><MdMenuBook/>My Books</Link>
                <Link to="/myissuedbooks" className='btn btn-success col-12 d-flex align-items-center gap-3'><MdTaskAlt/>Issued Books</Link>
            </Nav>
            <div className='sticky-bottom pb-4 border-top pt-3 d-flex gap-2 col-12'>
                <Link to = "/"><img src={profile} alt="" data-tip="Log Out" className='col-2 profile'/></Link>
                <ReactTooltip />
                <div className='text-white col-7'>
                    <div className='col-12'>{userDetails.name}</div>
                    <div className='adminEmail pt-2 col-12'>{userDetails.Email}</div>
                </div>
            </div>
        </div>
        <div className='col-10 backcolor2'>
            <Outlet />
        </div>
    </div>
  )
}

export default Student