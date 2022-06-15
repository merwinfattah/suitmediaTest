import './style.css';
import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
        <Navbar />
        <main>
            <h1> Hello World!</h1>
        </main>
    </React.Fragment>
  );
}

export default App;
