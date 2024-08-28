import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="#home"><img src={logo} className="App-logo" /></a>
        <div>
          <h1>Hello World!</h1>
          <p>This page has a11y issues.</p>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <p></p>
        </ul>
      </header>
    </div>
  );
}

export default App;
