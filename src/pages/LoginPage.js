import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    fetch('https://fakestoreapi.com/auth/login',{
      method:'POST',
      body:JSON.stringify({
        username: "mor_2314",
        password: "83r5^_"
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => console.log(json));
  };

  return (
    <div className="login-container col-4">
      <div className='title'>Sign in</div>
      <input
        type='text'
        placeholder='Email or username'
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleSubmit}>Login</button>
      <div>Go back</div>
    </div>
  );
};

export default Login;
