import "./App.css";
import Grid from "./components/Grid";
import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    axios
      .get("/quotes")
      .then((res) => setQuotes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Grid quotes={quotes} />
    </div>
  );
}

export default App;
