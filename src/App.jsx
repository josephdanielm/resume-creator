// import { useState } from "react";
import "./App.css";
import "./styles/Resume.css";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <header>
        <h1>Resume Creator</h1>
      </header>
      <main className="main">
        <section className="resume-container">
          <Resume />
        </section>
      </main>
      <footer>
        <h2>josephdanielm</h2>
      </footer>
    </>
  );
}

export default App;
