import React from 'react';
import './css/login.css';

function LoginScreen(){
    return(
        <div className="login">
            <div className="loginContainer">
            <div className="loginBox">
                <div className="loginForm">
                <div className="loginHeader">
                    <h3>MEST</h3>
                    <h1>WEATHER<span className="dot">APP.</span></h1>
                </div>
                <form action="">
                   <div>
                   
                    <input type="text" id="email" className="input email" placeholder="name@domain.com"/>
                   </div>
                    
                    <div>
                   
                    <input type="text" id="password" className="input password" placeholder="Password"/>
                    </div>
                   <div className="loginSubmit">
                       <input type="button" value="Login" className="loginBtn"/>
                   </div>
                </form>
                </div>
                
            </div>
            <div className="loginBox loginImage">
                
            </div>
        </div>
        </div>
        
    );
}

export default LoginScreen;