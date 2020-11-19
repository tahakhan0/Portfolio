import { Navbar } from "./components/Navbar";
import "./components/styles.css";
import { About } from "./components/About";
import "font-awesome/css/font-awesome.min.css";
import Projects from "./components/Projects";
import { Footer } from "./components/Footer";
import { WorkingOn } from "./components/WorkingOn";
import { useRef } from "react";

function App() {
  const projectsRef = useRef(null);
  const workingOnRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container-fluid">
      <Navbar
        handleScroll={handleScroll}
        projectsRef={projectsRef}
        workingOnRef={workingOnRef}
      />
      <About handleScroll={handleScroll} projectsRef={projectsRef} />
      <Projects projectsRef={projectsRef} />
      <WorkingOn workingOnRef={workingOnRef} />
      <Footer />
    </div>
  );
}

export default App;
