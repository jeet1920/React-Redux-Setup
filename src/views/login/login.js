import React, { useState } from 'react';

function LoginPage(props) {
  console.log("Login Page Props",props)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = () => {
    props.logInHandler({username,password})
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
