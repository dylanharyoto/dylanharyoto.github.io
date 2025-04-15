import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./sections/About";
import Activities from "./sections/Activities";
import Awards from "./sections/Awards";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-theme text-theme flex justify-center flex-wrap m-0 p-0 box-border font-['Rubik'] text-base">
        <header className="w-3/4 fixed mt-2.5 z-30">
          <NavBar toggleTheme={toggleTheme} theme={theme} />
        </header>
        <main>
          <About />
          <Experience />
          <Projects />
          <Activities />
          <Awards />
        </main>
      </div>
    </div>
  );
}

export default App;