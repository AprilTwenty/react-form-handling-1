import { useState } from "react"
import "./App.css";

function App() {
  const [greetingText, setGreetingText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setGreetingText(event.target.greeting.value);

  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
  
      <div className="greeting-container">
          {greetingText === "" ? "Greeting Message" : greetingText}
      </div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input 
          id="greeting-message" 
          name="greeting"
          type="text" />
      </div>

      <div className="buttons">
        <button type="submit">Update text</button>
      </div>
      </form>
    </div>
  );
}

export default App;
