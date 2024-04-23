import React, { useState } from 'react';
import Cookies from "universal-cookie";
import './Styles.css';
import freq from './Fetchreq';

// LoginForm Component
const LoginForm = () => {
    const cookies = new Cookies();
    console.log(cookies.get("authorization"))
    const [message, setMessage] = useState("");
    const handleLogin = async (e) => {
        let Lemail, Lpassword;
        e.preventDefault();
        Lemail = e.target.Lemail.value;
        Lpassword = e.target.Lpassword.value;
        const formData = { 'uEmail': Lemail, 'uPass': Lpassword }
        console.log(formData)
        const response = await freq("POST","login",formData)
        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData)
            if (responseData.status == "successful") {
                cookies.set("token", responseData.token);
                window.location.href = '/'
              }
              else if(responseData.status == "invalid"){
                let text = "Invalid Credentials";
                setMessage(<div dangerouslySetInnerHTML={{ __html: text }} style={{display:'flex',color:'red',fontWeight:'bold'}}></div>);
              }
              else if (responseData.status == "unverified") {
                let text = "verify your Email";
                setMessage(<div dangerouslySetInnerHTML={{ __html: text }} style={{display:'flex',color:'brown',fontWeight:'bold'}}></div>);
              }
              else{
                // console.log(responseData)
              }
        }
        else {
          console.error('No Response');
        }
    }
    return (
        <div className="login-box">
            <form onSubmit={handleLogin}>
            <input type="email" className="email ele" placeholder="youremail@email.com" name='Lemail' required/>
            <input type="password" className="password ele" placeholder="password" name='Lpassword' required/>
            <a href="forgotpass.html">Forgot Password ?</a>
            <button className="clkbtn">Login</button>
            {message}
            </form>
        </div>
    );
};

// SignupForm Component
const SignupForm = () => {
    const [message, setMessage] = useState("");
    const handleSignup = async (e) => {
        let Sname, Semail, Spassword;
        e.preventDefault();
        Sname = e.target.Sname.value;
        Semail = e.target.Semail.value;
        Spassword = e.target.Spassword.value;
        const formData = { 'Sname': Sname, 'uEmail': Semail, 'uPass': Spassword }
        console.log(formData)
        const response = await freq("POST","signup",formData)
        if (response.ok) {
            const responseData = await response.json();
            if (responseData.status == "successful") {
                let text = "Check your Email and Verify Account";
                setMessage(<div dangerouslySetInnerHTML={{ __html: text }} style={{display:'flex',color:'green',fontWeight:'bold'}}></div>);
              }
              else if(responseData.status == "unavailable"){
                let text = "Email already registered!";
                setMessage(<div dangerouslySetInnerHTML={{ __html: text }} style={{display:'flex',color:'red',fontWeight:'bold'}}></div>);
              }
              else{
                let text = "An error occured <br> Try again after sometime";
                setMessage(<div dangerouslySetInnerHTML={{ __html: text }} style={{display:'flex',color:'red',fontWeight:'bold'}}></div>);
              }
        }
        else {
          console.error('No Response');
        }
    }
    return (
        <div className="signup-box">
            <form onSubmit={handleSignup}>
            <input type="text" className="name ele" placeholder="Enter your name" name='Sname' />
            <input type="email" className="email ele" placeholder="youremail@email.com" name='Semail' />
            <input type="password" className="password ele" placeholder="password" name='Spassword' />
            <input type="password" className="password ele" placeholder="Confirm password" name='Scpassword' />
            <button className="clkbtn">Signup</button>
            {message}
            </form>
        </div>
    );
};

// Slider Component
const Slider = ({ moveSlider }) => {
    return (
        <div className={`slider ${moveSlider ? 'moveslider' : ''}`}></div>
    );
};

// App Component
const App = () => {
    const [isSignup, setIsSignup] = useState(false);

    const handleSignupClick = () => {
        setIsSignup(true);
    };

    const handleLoginClick = () => {
        setIsSignup(false);
    };

    
    
    return (
        <div className='parent-div'>
            <div className="container-div">
                <Slider moveSlider={isSignup} />
                <div className="btn-slider-login">
                    <button className={!isSignup ? 'active' : ''} onClick={handleLoginClick}>Login</button>
                    <button className={isSignup ? 'active' : ''} onClick={handleSignupClick}>Signup</button>
                </div>
                <div className="form-section-user">
                    {!isSignup ? <LoginForm /> : <SignupForm />}
                </div>
            </div>
        </div>
    );
};

export default App;



