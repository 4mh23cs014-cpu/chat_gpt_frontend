import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setResult("Success: Account created! " + JSON.stringify(data));
      } else {
        setResult(`Error (${response.status}): ` + (data.detail || JSON.stringify(data)));
      }
    } catch (error) {
      if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
        setResult("Error: Could not connect to the backend. Please ensure your FastAPI server is running on http://127.0.0.1:8000 and CORS is enabled.");
      } else {
        setResult("Error: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.signupBox}>
        <h2 style={styles.title}>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        {result && (
          <div style={{
            ...styles.result,
            color: result.startsWith('Success') ? '#28a745' : '#dc3545',
            backgroundColor: result.startsWith('Success') ? '#e8f5e9' : '#f8d7da',
            padding: '10px',
            borderRadius: '4px',
            border: `1px solid ${result.startsWith('Success') ? '#c3e6cb' : '#f5c6cb'}`
          }}>
            <strong>{result.startsWith('Success') ? '✅ ' : '❌ '}</strong>
            <pre style={{ ...styles.pre, color: 'inherit', background: 'transparent', margin: 0, padding: 0 }}>{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  signupBox: {
    background: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
    width: '300px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    background: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
  },
  result: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#333',
    wordBreak: 'break-all',
  },
  pre: {
    background: '#f8f9fa',
    padding: '10px',
    borderRadius: '4px',
    overflowX: 'auto',
  }
};

export default Signup;