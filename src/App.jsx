
import './App.css'
import Landing_section from "./components/landing_section/landing_section";
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';

function App() {


  return (
    <>
      <Landing_section />
      <Skills/>
      <Projects/>
      <Footer/>
    </> 
  )
}

export default App
