import React from 'react';
import Signup from './Signup'; // Assuming Signup.js is in the same directory
import './App.css'; // Your global styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You could place a global header here */}
      </header>
      <main>
        <Signup />
      </main>
    </div>
  );
}

export default App;