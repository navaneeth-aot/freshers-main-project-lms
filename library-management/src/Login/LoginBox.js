import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function LoginBox({handleEmail,handlePassword,handleLogin,login,setlogin}) {
    
    
    return(
        <div className='d-flex justify-content-center mt-5'>
            <div>
                <h3>Login</h3>
                <p>Welcome back! Please enter your details.</p>
                <form>
                    <Tabs id = "controlled-tab-example" activeKey={login} onSelect={(k) => {setlogin(k)}} className = "mb-3">
                        <Tab eventKey = "admin" title = "Admin" ></Tab>
                        <Tab eventKey = "student" title = "Student" ></Tab>
                    </Tabs>
                
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type = "email" placeholder = "Enter your email" onChange={handleEmail}/>
                    <br/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = "password" placeholder = "Enter your password" onChange={handlePassword}/>
                    <br/>
                    <Button className = "login-btn" type = "submit" onClick={handleLogin}>Login</Button>
                </form>
            </div>
        </div>
    )
}