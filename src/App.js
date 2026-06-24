import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Activities from "./sections/Activities";
import Awards from "./sections/Awards";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-theme text-theme relative min-h-screen w-full overflow-x-hidden">
        {/* subtle technical grid texture, fades toward the bottom of the viewport */}
        <div
          className="bg-grid pointer-events-none fixed inset-0 z-0"
          style={{
            opacity: 0.35,
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent)",
          }}
        />

        <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[94%] sm:w-[90%] lg:w-3/4 xl:w-2/3 z-30">
          <NavBar toggleTheme={toggleTheme} theme={theme} />
        </header>

        <main className="relative z-10 flex flex-col w-full">
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
