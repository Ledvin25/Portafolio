import './App.css'
import Header from './sections/header/Header';
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';

function App() {
  return (
    <div className="site">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
