import "./App.css";
import Grid from "./components/Grid";
import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";

const data = [
  "This is a cool one",
  "That one too",
  "This is test",
  "Another one here",
  "What are you doing",
  "Get a job",
  "WHat am I doing with my life",
];

function App() {
  useEffect(() => {
    axios
      .get("/quotes")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Grid quotes={data} />
    </div>
  );
}

export default App;
