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
      <h2>
        This page is no longer available... But you can have a look at its
        GitHub repo !
      </h2>
      {/* <Grid quotes={quotes} /> */}
    </div>
  );
}

export default App;
