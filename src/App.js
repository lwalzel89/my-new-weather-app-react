import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Lisa Walzel and is{" "}
          <a
            href="https://github.com/lwalzel89/my-new-weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub.
          </a>
          and{" "}
          <a
            href="https://inspiring-kitten-637218.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
