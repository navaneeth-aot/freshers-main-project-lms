import LoginBox from './LoginBox';
import logo from '../Images/Logo-LMC.png';
import React,{ useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Student from '../student/Student';

export default function Login({setauthentication,authentication,login,setlogin,students}) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState();
    

    const handleEmail = (e) => { setemail(e.target.value) }
    const handlePassword = (e) => { setpassword(e.target.value) }
    const handleLogin = (e) => { 
        e.preventDefault();
        
        if(login == "admin") {
            if(email.toLowerCase() == "aot@gmail.com" && password == 1234) {
                setauthentication(!authentication);
                alert("Logged In");
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
            const log = students.find((students)=>{
                if((email.toLowerCase() == students.Email.toLowerCase() && password == students.password)) {
                    setauthentication(!authentication)
                    alert("login success")
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