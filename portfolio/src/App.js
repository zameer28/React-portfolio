
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skill/Skill";
import Works from "./components/Works/Work";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
