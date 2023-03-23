import logo from './logo.svg';
import './App.css';

function App() {
  const dept="ECE";
  return (
    <div>
      <header className="App-header">
      <h1>
          DAY_1_Assignment
        </h1>
        <button onClick={window['object_function']}>CLICK HERE</button>
        {/* <button onClick={window['array_function']}>Click the button</button> */}
      </header>

    
      {/* <div>
          <h1>Welcome to {dept} , SKCET</h1>
      </div> */}
      
    </div>
  );
}

export default App;