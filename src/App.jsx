import { useState } from "react"
import "./App.css";

function App() {
  const [greetingText, setGreetingText] = useState("");
  const [inputGreeting, setInputGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setGreetingText(inputGreeting);
    const data = {
      greetingText: inputGreeting
    };
    //alert(JSON.stringify(data));

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
          type="text"
          value={inputGreeting}
          onChange={(event) => setInputGreeting(event.target.value)}
          />
      </div>

      <div className="buttons">
        <button type="submit">Update text</button>
      </div>
      </form>
    </div>
  );
}

export default App;
