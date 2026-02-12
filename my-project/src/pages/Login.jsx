import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token (assuming your backend sends 'access_token')
        localStorage.setItem('token', data.access_token);
        navigate('/dashboard'); // Go to dashboard on success
      } else {
        alert("Login failed: Check credentials");
      }
    } catch (err) {
      alert("Backend server is offline.");
    }
  };

  return (
    <div className="auth-page">
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;