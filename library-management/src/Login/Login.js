
import LoginBox from './LoginBox';
import logo from '../Images/Logo-LMC.png';
import { useState } from 'react';

export default function Login({setauthentication,authentication}) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState();

    const handleEmail = (e) => { setemail(e.target.value) }
    const handlePassword = (e) => { setpassword(e.target.value) }
    const handleLogin = (e) => { 
        e.preventDefault();
        email=="aot@gmail.com" && password==1234 ? setauthentication(!authentication) : console.log("hi");
    }

    return(
        <div>
            <div className='col-md-3'>
                <div className='d-flex px-5 pt-5'>
                    <img src={logo} alt=""/>
                    <p className='logo'>LMC</p>
                </div>
            </div>
            <div className='col-md-12'>
                <LoginBox handleEmail={handleEmail} handlePassword={handlePassword} handleLogin={handleLogin} />
            </div>
        </div>
    )
} 