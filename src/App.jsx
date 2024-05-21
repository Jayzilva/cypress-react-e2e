import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setButtonClicked(true);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <header data-testid="cypress-header">
        <h1>Vite + React</h1>
      </header>
      <main>
        <p data-testid="cypress-paragraph">This is a simple app to test Cypress functionality.</p>
        <button data-testid="cypress-button" onClick={handleClick}>Click Me</button>
        {buttonClicked && <p data-testid="cypress-clicked-message">Button was clicked!</p>}
      </main>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
