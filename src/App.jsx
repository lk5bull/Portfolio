// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact'; // <- Importa el nuevo componente
import Footer from './components/Footer'; // <- Importa el nuevo componente

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer /> {/* <- Añádelo aquí */}
    </div>
  )
}

export default App;