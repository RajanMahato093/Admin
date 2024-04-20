import React, { useState } from 'react';
import './Styles.css';

// LoginForm Component
const LoginForm = () => {
  return (
    <div className="login-box">
      <input type="email" className="email ele" placeholder="youremail@email.com" />
      <input type="password" className="password ele" placeholder="password" />
      <a href="forgotpass.html">Forgot Password ?</a>
      <button className="clkbtn">Login</button>
    </div>
  );
};

// SignupForm Component
const SignupForm = () => {
  return (
    <div className="signup-box">
      <input type="text" className="name ele" placeholder="Enter your name" />
      <input type="email" className="email ele" placeholder="youremail@email.com" />
      <input type="password" className="password ele" placeholder="password" />
      <input type="password" className="password ele" placeholder="Confirm password" />
      <button className="clkbtn">Signup</button>
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
    <div className='parent'>
    <div className="container">
      <Slider moveSlider={isSignup} />
      <div className="btn-slider">
        <button className={!isSignup ? 'active' : ''} onClick={handleLoginClick}>Login</button>
        <button className={isSignup ? 'active' : ''} onClick={handleSignupClick}>Signup</button>
      </div>
      <div className="form-section">
        {!isSignup ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
    </div>
  );
};

export default App;
