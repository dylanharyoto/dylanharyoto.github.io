import NavBar from "./components/NavBar";
import About from "./sections/About";
import Activities from "./sections/Activities";
import Awards from "./sections/Awards";
import Experience from "./sections/Experience";
import Opening from "./sections/Opening";
import Projects from "./sections/Projects";

function App() {
  return (
    <div id="body">
      <header>
        <NavBar />
      </header>
      <main>
        <Opening />
        <About />
        <Experience />
        <Projects />
        <Activities />
        <Awards />
      </main>
    </div>
  );
}

export default App;
