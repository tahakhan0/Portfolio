import { Navbar } from "./components/Navbar";
import "./components/styles.css";
import { About } from "./components/About";
import "font-awesome/css/font-awesome.min.css";
import Projects from "./components/Projects";
import { Footer } from "./components/Footer";
import { WorkingOn } from "./components/WorkingOn";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <About />
      <Projects />
      <WorkingOn />
      <Footer />
    </div>
  );
}

export default App;
