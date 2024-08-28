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
      </header>
    </div>
  );
}

export default App;
