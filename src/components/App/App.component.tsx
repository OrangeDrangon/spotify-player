import React from 'react';

import classes from './App.module.scss';
import logo from 'assets/logo.svg';

const App: React.FC = () => {
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={classes.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
