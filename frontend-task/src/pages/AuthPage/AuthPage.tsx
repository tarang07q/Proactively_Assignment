import React, { useState } from 'react';
import './AuthPage.scss';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(prevState => !prevState);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted!');
    // In a real app, you would send this data to a backend for authentication
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup submitted!');
    // In a real app, you would send this data to a backend for user registration
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">{isLogin ? 'Login' : 'Sign Up'}</h1>
        {isLogin ? (
          <form className="auth-form" onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="login-email">Email</label>
              <input type="email" id="login-email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input type="password" id="login-password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="btn btn--primary auth-btn">Login</button>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleSignupSubmit}>
            <div className="form-group">
              <label htmlFor="signup-name">Name</label>
              <input type="text" id="signup-name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="signup-email">Email</label>
              <input type="email" id="signup-email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <input type="password" id="signup-password" placeholder="Enter your password" required />
            </div>
            <div className="form-group">
              <label htmlFor="signup-confirm-password">Confirm Password</label>
              <input type="password" id="signup-confirm-password" placeholder="Confirm your password" required />
            </div>
            <button type="submit" className="btn btn--primary auth-btn">Sign Up</button>
          </form>
        )}
        <p className="auth-toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <span onClick={toggleForm} className="auth-toggle-link">
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage; 