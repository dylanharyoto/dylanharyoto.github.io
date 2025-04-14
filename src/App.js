import NavBar from "./components/NavBar";
import About from "./sections/About";
import Activities from "./sections/Activities";
import Awards from "./sections/Awards";
import Experience from "./sections/Experience";
import Opening from "./sections/Opening";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="bg-[#0c1c24] flex justify-center flex-wrap m-0 p-0 box-border text-white font-['Rubik'] text-base">
      <header className="w-3/4 fixed mt-2.5 z-30">
        <NavBar />
      </header>
      <main>
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
