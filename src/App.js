// import Box from "@mui/material/Box";
import Navibar from "./components/Navibar";
import Project from "./components/Projects";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navibar />
      <Header />
      {/* <Main /> */}
      {/* <Project /> */}
      <ContactForm />
      <AboutMe />
      <Skill />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
