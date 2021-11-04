import { useState, useEffect } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Home = () => {
  const [state, setState] = useState({
    rootDir: '',
    mfeDir: [],
    mfeCount: 0,
  });

  const newMfeButton = (
    <div>
      <label htmlFor="mfe-1" className="custom-file-upload">
        {state.mfeDir.length > 0
          ? state.mfeDir[0]
          : 'Set MicroFrontend Directory'}
      </label>
      <input type="file" webkitdirectory="true" id="mfe-1" />
    </div>
  );

  const [mfeLoaders, setMfeLoader] = useState([newMfeButton]);

  const mfeDirDisplay = (e) => {
    console.log('THE STATE AT BEGINNING OF MFEDIRDISPLAY : ', state);
    let dir = document.getElementById(e.target.id).files[0].path; // path/index.jsx
    const { name } = document.getElementById(e.target.id).files[0]; // index.jsx
    dir = dir.replace(name, ''); // path
    const newMfeDir = [...state.mfeDir]; // array of Strings
    newMfeDir.push(dir);
    setState({
      rootDir: state.rootDir,
      mfeDir: newMfeDir,
      mfeCount: state.mfeCount + 1,
    });
  };

  const dirDisplay = (e) => {
    console.log('dirDISPLAY IS CALLED');
    let dir = document.getElementById('dir-upload').files[0].path; // path/index.jsx
    const { name } = document.getElementById('dir-upload').files[0]; // index.jsx
    dir = dir.replace(name, ''); // path
    setState({ ...state, rootDir: dir });
  };

  const addMFELoader = () => {
    console.log('INSIDE ADD LOADER');
    console.log('mfeCOUNTER', state.mfeCount);
    setMfeLoader([...mfeLoaders, newMfeButton]);
  };

  useEffect(() => {
    console.log('CURRENT STATE ', state);
    // setState({ ...state});
    document
      .getElementById('mfe-1')
      .addEventListener('change', (e) => mfeDirDisplay(e));
  });

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
        {mfeLoaders}
        <button type="button" onClick={() => addMFELoader()}>
          <span role="img" aria-label="books">
            📚
          </span>
          + MicroFrontEnd
        </button>

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
