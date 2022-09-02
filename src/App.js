import "./App.css";
import Bio from "./Components/Bio";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";

function App() {
  return (
    <main>
      <Bio></Bio>
      <hr />
      <Experience />
      <hr></hr>
      <Skills />
      <hr />
      <Contact />
      <hr/>
    </main>
  );
}

export default App;
