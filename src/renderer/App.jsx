import { useState, useEffect } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Home = () => {
  const [state, setState] = useState({
    rootDir: '',
  });

  const dirButtonValue = 'Set Root Directory';
  dirDisplay = (e) => {
    let dir = document.getElementById('dir-upload').files[0].path;
		const name = document.getElementById('dir-upload').files[0].name;
		dir = dir.replace(name, '');
    setState({ rootDir: dir });
    console.log('DIRECTORY = ', name);
  };

  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <label htmlFor="dir-upload" className="custom-file-upload">
        {state.rootDir || 'Set Root Directory'}
      </label>
      <input
        type="file"
        webkitdirectory="true"
        id="dir-upload"
        onChange={(e) => dirDisplay(e)}
      />
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
