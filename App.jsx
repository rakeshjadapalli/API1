import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <div className="container">
        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? " Click Here To Change To  Light Theme" : "Click Here To Change To  Dark Theme"}
        </button>

        <div className="card">
          <h1>Counter App</h1>
          <p className="subtitle">Use the buttons to change the count</p>

          <div className="count">{count}</div>

          <div className="buttons">
            <button className="increment" onClick={increment}>
              + Increment
            </button>

            <button className="decrement" onClick={decrement}>
              − Decrement
            </button>

            <button className="reset" onClick={reset}> 
              ↻ Reset
            </button>
          </div>
        </div>

        <p className="theme-status">
          Current Theme: <strong>{darkMode ? "Dark" : "Light"}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;
