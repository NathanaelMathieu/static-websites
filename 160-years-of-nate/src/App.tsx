import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul className="mdc-image-list my-image-list">
        <li className="mdc-image-list__item">
          <div className="mdc-image-list__image-aspect-container">
            <img alt="baby" className="mdc-image-list__image" src="src/images/00a.jpg"/>
          </div>
          <div className="mdc-image-list__supporting">
            <span className="mdc-image-list__label">Text label</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
