import React from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';


export default function LoginBox({handleEmail,handlePassword,handleLogin}) {
    

    return(
        <div className='d-flex justify-content-center mt-5'>
            <div>
                <p>Login</p>
                <p>Welcome back! Please enter your details.</p>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" onChange={handleEmail}/>
                <br/>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" onChange={handlePassword}/>
                <br/>
                <Button className="login-btn" type="submit" onClick={handleLogin}>Login</Button>
            </div>
        </div>
    )
}