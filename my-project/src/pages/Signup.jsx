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
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult("Error: " + error.message);
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
          <div style={styles.result}>
            <strong>Result:</strong>
            <pre style={styles.pre}>{result}</pre>
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