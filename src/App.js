import React from "react";
import "./App.css";
import Movies from "./components/movies";
// import Genres from "./components/genres";

function App() {
  // receive genre
  // change state to fit genre

  return (
    <main className="container">
      {/* <Genres onSelect={handleOnSelect}></Genres> */}
      <Movies />
    </main>
  );
}

export default App;
