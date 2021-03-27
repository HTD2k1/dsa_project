import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <code>Hello my name is Nguyen Thanh Phong</code> 
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

      <Chart />
    </div>
  );
}

export default App;
