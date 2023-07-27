import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [promptText, setPromptText] = useState("");

  const handleInputChange = (event) => {
    setPromptText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Your Flask server URL
    const serverURL = "http://localhost:5000/prompt/";

    // Data to send in the POST request
    const data = { prompt: promptText };

    // Sending a POST request to the Flask server
    axios
      .post(serverURL, data)
      .then((response) => {
        // Handle the response from the server if needed
        console.log("Response:", response);
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error:", error);
      });
  };

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Enter Prompt</label>
          <input
            type="text"
            placeholder="Enter Prompt"
            value={promptText}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="container">
        <div className="card">
          <div className="card-header">Animate Photo</div>
          <div className="card-divider"></div>
          <div className="card-body">
            <p>Make the photo in motion</p>
          </div>
          <div className="card-divider"></div>
          <div className="card-footer">
            <button className="button button-light">Buy a Coffee</button>
            <button className="button button-primary" onClick={handlePrompt}>
              Try Out
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">ChatPDF</div>
          <div className="card-divider"></div>
          <div className="card-body">
            <p>Conversations improved with multiple PDF together.</p>
          </div>
          <div className="card-divider"></div>
          <div className="card-footer">
            <button className="button button-light">Buy a Coffee</button>
            <button className="button button-secondary">Try Out</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;

function handlePrompt() {
  var prompt = window.prompt("Enter the prompt");

  if (prompt !== null && prompt.trim() !== "") {
    // Prepare the data to send in the POST request
    const data = { prompt: prompt };

    // Send the POST request to the Flask server
    fetch("http://localhost:5000/prompt/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // Handle the response from the server if needed
        console.log("Response:", response);
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error:", error);
      });
  } else {
    // User canceled the prompt or entered an empty value
    console.log("Prompt canceled or empty value.");
  }
}
