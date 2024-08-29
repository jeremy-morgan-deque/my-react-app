import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/"><img src={logo} className="App-logo" /></a>
        <div>
          <h1>My React App</h1>
          <p>This page has a11y issues.</p>
        </div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <p>Item 4</p>
        </ul>
      </header>
    </div>
  );
}

export default App;
