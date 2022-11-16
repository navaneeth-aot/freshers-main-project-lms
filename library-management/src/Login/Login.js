import LoginBox from './LoginBox';
import logo from '../Images/Logo-LMC.png';
import React,{ useState } from 'react';
import Student from '../student/Student';

export default function Login({setauthentication,authentication,login,setlogin,students}) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState();
    

    const handleEmail = (e) => { setemail(e.target.value) }
    const handlePassword = (e) => { setpassword(e.target.value) }
    const handleLogin = (e) => { 
        e.preventDefault();

        
        if(login == "admin") {
            (email == "aot@gmail.com" && password == 1234) ? setauthentication(!authentication) : alert("Login details is not Valid")
        }

        else if(login == "student") {
            students.map((students)=>{
                (email == students.Email && password == students.password) ? setauthentication(!authentication) : alert("Login details is not Valid")
            })
            // (email == "jio@gmail.com" && password == 1234) ? setauthentication(!authentication) : alert("Login details is not Valid")
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
            </div>
        </div>
    )
} 