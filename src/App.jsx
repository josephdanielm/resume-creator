// import { useState } from "react";
import "./App.css";
import ResumeForm from "./components/ResumeForm";

function App() {
  return (
    <>
      <header>
        <h1>Resume Creator</h1>
      </header>
      <main className="main">
        <section className="resume-form">
          <ResumeForm />
        </section>
        <section className="live-resume"></section>
      </main>
      <footer>
        <h2>josephdanielm</h2>
      </footer>
    </>
  );
}

export default App;
