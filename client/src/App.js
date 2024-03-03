import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App">
      <main>
        {showLogin ? (
          <Login onSignUpClick={() => setShowLogin(false)} />
        ) : (
          <Signup />
        )}
      </main>
    </div>
  );
}


export default App;