import Navbar from './Sections/Navbar.jsx'
import Hero from './Sections/Hero.jsx'
import About from './Sections/About.jsx'
import Projects from './Sections/Projects.jsx'
import Clients from './Sections/Clients.jsx'
import Contact from './Sections/Contact.jsx'
import Footer from './Sections/Footer.jsx'
///dsfds
import Experience from './Sections/Experience.jsx'
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App