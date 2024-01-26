import reactdom from "react-dom";
import About from "./components/About";
import Skills from "./components/skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Project from "./components/project";
import Projectdet from "./components/projectdesc";
function App() {
  return (
    <div>
      <About />
      <Skills />
      <Project />
      <Education />
      <Contact />
    </div>
  );
}
export default App;
