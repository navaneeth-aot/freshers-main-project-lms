import React from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';

function ViewDetails({details}) {
    console.log(details);
  return (
    <>

    <div className='col-md-10 p-5 backcolor'>

        <p className='d-flex align-items-center'>
            <MdOutlineArrowBackIos size={20}/>Students /Nitha Samuel
        </p>
        <hr></hr>
        <div className='d-flex mt-5 px-5 bg-white py-3'>
            <div className='col-8 border-end pt-2'>
                <h4>Nitha Samuel</h4>
                <h6>nithasamuel@gmail.com</h6>
            </div>
            <div className='col-2 pt-2 ps-4'>
                <h6>Total Books issued</h6>
                <h6>Returned Books</h6>
                <h6>Total Fine</h6>
            </div>
            <div className='col-2 pt-2 ps-5'>
                <h6>5</h6>
                <h6>4</h6>
                <h6>Rs. 70</h6>
            </div>
        </div>

        <div className='box mt-4 bg-white px-5 border-box rounded'>
            <div className="d-flex justify-content-between px-2 py-3 border-bottom grey">
                    <div className='col-2'>Book Title</div>
                    <div className='col-2'>Student</div>
                    <div className='col-2'>Issue Date</div>
                    <div className='col-2'>Due Date</div>
                    <div className='col-2'>Return Date</div>
                    <div className='col-2 ps-4'>Fine<br/>(Rs. 10 per day)</div>
            </div>

                    <div key={"jjh"} className="d-flex justify-content-between px-2 py-3 border-bottom">
                        <div className='col-2'> {"It Start With Us"} </div>
                        <div className='col-2'> {"Collen Hoover"} </div>
                        <div className='col-2'>{"10-11-2022 "}</div>
                        <div className='col-2'>{"18-11-2022"}</div>
                        <div className='col-2 ps-5'>{"-"}</div>
                        <div className='col-2 ps-5'> {"20"} </div>
                    </div>
        </div>
    </div>
    </>
  )
}

export default ViewDetails