import React, { useState } from 'react';
import Chat from './Chat';
import Login from './Login';

function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  // XXX (normally store the token in localStorage)
  return (
      <Chat  token={ token } />
  );
}

export default App;