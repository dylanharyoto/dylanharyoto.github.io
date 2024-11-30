import NavBar from "./components/NavBar";
import About from "./sections/About";
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
        <Awards />
      </main>
      <footer>
        {/* <div className="heading">
          <h4>Leading by Example</h4>
          <p>Making a Difference through Guiding Others</p>
        </div>
        <div className="fields">
          <input
            type="text"
            id="firstname"
            name="First Name"
            placeholder="First Name"
          />
          <input
            type="text"
            id="lastname"
            name="Last Name"
            placeholder="Last Name"
          />
          <input
            type="text"
            id="firstname"
            name="First Name"
            placeholder="First Name"
          />
          <input
            type="text"
            id="lastname"
            name="Last Name"
            placeholder="Last Name"
          />
        </div> */}
      </footer>
    </div>
  );
}

export default App;
