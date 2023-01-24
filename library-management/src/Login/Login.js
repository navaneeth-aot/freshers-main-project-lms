import LoginBox from './LoginBox';
import logo from '../Images/Logo-LMC.png';
import React,{ useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { FETCH_STUDENTS } from '../graphQl/graphql';

export default function Login({setuser,login,setlogin}) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState();
    const navigate  = useNavigate();
    const {data,loading,error} = useQuery(FETCH_STUDENTS);
    

    const handleEmail = (e) => { setemail(e.target.value) }
    const handlePassword = (e) => { setpassword(e.target.value) }
    const handleLogin = (e) => { 
        e.preventDefault();
        
        if(login == "admin") {
            
            if(email.toLowerCase() == "aot@gmail.com" && password == 1234) {
                alert("Logged In");
                navigate("/issuedbooks");
            }
            else {
                toast.error('Login Error!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }

        else if(login == "student") {
            const log = data.students.find((student)=>{
                if((email.toLowerCase() == student.Email.toLowerCase() && password == student.password)) {
                    navigate("/myBooks",{state:{id:student.id}});
                    setuser(student.id)
                    alert("login success");
                }  
            }) 
            
            if(!log) {
                toast.error('Login Error!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
            
        }
    }

    if(loading) return <p className='pt-3'>loading data...</p>;
    if(error) return <p className='fs-1'>ERROR 404 </p>;

    return(
        <div>
            <div className='col-md-3'>
                <div className='d-flex px-5 pt-5'>
                    <img src = {logo} alt = ""/>
                    <p className='logo'>LMC</p>
                </div>
            </div>
            <div className='col-md-12'>
                <LoginBox handleEmail={handleEmail} handlePassword={handlePassword} handleLogin={handleLogin} login={login} setlogin={setlogin} />
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />
            </div>
        </div>
    )
} 